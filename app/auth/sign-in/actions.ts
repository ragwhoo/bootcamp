'use server';

import {
  checkRateLimit,
  checkAccountLockout,
  recordFailedAttempt,
  clearFailedAttempts,
} from '@/lib/auth/security';

export interface SignInResult {
  error?: string;
  success?: boolean;
}

export async function checkSignInBeforeSubmit(
  _prevState: SignInResult | null,
  formData: FormData
): Promise<SignInResult> {
  const email = formData.get('email') as string;

  if (!email) {
    return { error: 'Email is required' };
  }

  const rateKey = `signin:${email}`;
  const rateCheck = await checkRateLimit(rateKey);
  if (!rateCheck.allowed) {
    return { error: `Too many attempts. Try again in ${rateCheck.retryAfter}s` };
  }

  const lockout = await checkAccountLockout(email);
  if (lockout.locked) {
    return { error: `Account locked. Try again in ${lockout.retryAfter}s` };
  }

  return { success: true };
}

export async function recordSignInFailure(email: string) {
  await recordFailedAttempt(email);
}

export async function clearSignInAttempts(email: string) {
  await clearFailedAttempts(email);
}
