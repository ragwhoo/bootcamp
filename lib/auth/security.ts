import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

const MAX_ATTEMPTS = 5;
const LOCKOUT_SECONDS = 15 * 60; // 15 minutes
const RATE_WINDOW_SECONDS = 60; // 1 minute
const MAX_RATE = 10; // max requests per window

export async function checkRateLimit(key: string): Promise<{ allowed: boolean; retryAfter?: number }> {
  const now = new Date();

  const [existing] = await sql`
    SELECT count, reset_at FROM rate_limit
    WHERE key = ${key} AND reset_at > ${now}
    LIMIT 1
  `;

  if (!existing) {
    await sql`
      INSERT INTO rate_limit (key, count, reset_at)
      VALUES (${key}, 1, ${new Date(now.getTime() + RATE_WINDOW_SECONDS * 1000)})
    `;
    return { allowed: true };
  }

  if (existing.count >= MAX_RATE) {
    const retryAfter = Math.ceil((new Date(existing.reset_at).getTime() - now.getTime()) / 1000);
    return { allowed: false, retryAfter };
  }

  await sql`
    UPDATE rate_limit SET count = count + 1
    WHERE key = ${key} AND reset_at > ${now}
  `;
  return { allowed: true };
}

export async function checkAccountLockout(identifier: string): Promise<{ locked: boolean; retryAfter?: number }> {
  const key = `lockout:${identifier}`;
  const now = new Date();

  const [existing] = await sql`
    SELECT count, reset_at FROM rate_limit
    WHERE key = ${key} AND reset_at > ${now}
    LIMIT 1
  `;

  if (!existing) {
    return { locked: false };
  }

  const retryAfter = Math.ceil((new Date(existing.reset_at).getTime() - now.getTime()) / 1000);
  return { locked: true, retryAfter };
}

export async function recordFailedAttempt(identifier: string): Promise<{ locked: boolean; retryAfter?: number }> {
  const key = `lockout:${identifier}`;
  const now = new Date();

  const [existing] = await sql`
    SELECT count, reset_at FROM rate_limit
    WHERE key = ${key} AND reset_at > ${now}
    LIMIT 1
  `;

  if (!existing || now > new Date(existing.reset_at)) {
    await sql`
      INSERT INTO rate_limit (key, count, reset_at)
      VALUES (${key}, 1, ${new Date(now.getTime() + LOCKOUT_SECONDS * 1000)})
      ON CONFLICT (key) DO UPDATE SET count = 1, reset_at = ${new Date(now.getTime() + LOCKOUT_SECONDS * 1000)}
    `;
    return { locked: false };
  }

  if (existing.count + 1 >= MAX_ATTEMPTS) {
    const resetAt = new Date(now.getTime() + LOCKOUT_SECONDS * 1000);
    await sql`
      UPDATE rate_limit SET count = count + 1, reset_at = ${resetAt}
      WHERE key = ${key}
    `;
    return { locked: true, retryAfter: LOCKOUT_SECONDS };
  }

  await sql`
    UPDATE rate_limit SET count = count + 1
    WHERE key = ${key}
  `;
  return { locked: false };
}

export async function clearFailedAttempts(identifier: string): Promise<void> {
  const key = `lockout:${identifier}`;
  await sql`DELETE FROM rate_limit WHERE key = ${key}`;
}

export async function cleanupExpiredEntries(): Promise<void> {
  await sql`DELETE FROM rate_limit WHERE reset_at < NOW()`;
}

export function validatePassword(password: string): { valid: boolean; error?: string } {
  if (password.length < 8) {
    return { valid: false, error: 'Password must be at least 8 characters' };
  }
  if (!/[A-Z]/.test(password)) {
    return { valid: false, error: 'Password must contain at least one uppercase letter' };
  }
  if (!/[a-z]/.test(password)) {
    return { valid: false, error: 'Password must contain at least one lowercase letter' };
  }
  if (!/[0-9]/.test(password)) {
    return { valid: false, error: 'Password must contain at least one number' };
  }
  return { valid: true };
}
