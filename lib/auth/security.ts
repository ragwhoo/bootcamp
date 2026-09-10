const attempts = new Map<string, { count: number; resetAt: number }>();

const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000; // 15 minutes
const RATE_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_RATE = 10; // max requests per window

export function checkRateLimit(key: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const record = attempts.get(key);

  if (!record || now > record.resetAt) {
    attempts.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return { allowed: true };
  }

  if (record.count >= MAX_RATE) {
    return { allowed: false, retryAfter: Math.ceil((record.resetAt - now) / 1000) };
  }

  record.count++;
  return { allowed: true };
}

export function checkAccountLockout(identifier: string): { locked: boolean; retryAfter?: number } {
  const key = `lockout:${identifier}`;
  const record = attempts.get(key);

  if (!record || Date.now() > record.resetAt) {
    return { locked: false };
  }

  return { locked: true, retryAfter: Math.ceil((record.resetAt - Date.now()) / 1000) };
}

export function recordFailedAttempt(identifier: string): { locked: boolean; retryAfter?: number } {
  const key = `lockout:${identifier}`;
  const now = Date.now();
  const record = attempts.get(key);

  if (!record || now > record.resetAt) {
    attempts.set(key, { count: 1, resetAt: now + LOCKOUT_MS });
    return { locked: false };
  }

  record.count++;

  if (record.count >= MAX_ATTEMPTS) {
    record.resetAt = now + LOCKOUT_MS;
    return { locked: true, retryAfter: Math.ceil(LOCKOUT_MS / 1000) };
  }

  return { locked: false };
}

export function clearFailedAttempts(identifier: string): void {
  attempts.delete(`lockout:${identifier}`);
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
