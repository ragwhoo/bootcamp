'use server';

import {
  checkRateLimit,
  checkAccountLockout,
  recordFailedAttempt,
} from '@/lib/auth/security';

export async function checkSignInAllowed(
  _prevState: { error: string; allowed?: boolean } | null,
  formData: FormData
) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Email and password are required' };
  }

  const rateKey = `signin:${email}`;
  const rateCheck = checkRateLimit(rateKey);
  if (!rateCheck.allowed) {
    return { error: `Too many attempts. Try again in ${rateCheck.retryAfter}s` };
  }

  const lockout = checkAccountLockout(email);
  if (lockout.locked) {
    return { error: `Account locked. Try again in ${lockout.retryAfter}s` };
  }

  return { error: '', allowed: true };
}

export async function recordSignInFailure(email: string) {
  recordFailedAttempt(email);
}

export async function clearSignInAttempts(email: string) {
  const { clearFailedAttempts } = await import('@/lib/auth/security');
  clearFailedAttempts(email);
}
