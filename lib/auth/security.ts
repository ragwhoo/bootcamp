export async function checkRateLimit(_key: string): Promise<{ allowed: boolean; retryAfter?: number }> {
  return { allowed: true };
}

export async function checkAccountLockout(_identifier: string): Promise<{ locked: boolean; retryAfter?: number }> {
  return { locked: false };
}

export async function recordFailedAttempt(_identifier: string): Promise<{ locked: boolean; retryAfter?: number }> {
  return { locked: false };
}

export async function clearFailedAttempts(_identifier: string): Promise<void> {}

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
