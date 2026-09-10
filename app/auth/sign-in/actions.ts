'use server';

import { auth } from '@/lib/auth/server';
import { redirect } from 'next/navigation';
import {
  checkRateLimit,
  checkAccountLockout,
  recordFailedAttempt,
  clearFailedAttempts,
} from '@/lib/auth/security';

export async function signInWithEmail(
  _prevState: { error: string } | null,
  formData: FormData
) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Email and password are required' };
  }

  // Rate limit per IP (using email as proxy since we don't have IP in server actions)
  const rateKey = `signin:${email}`;
  const rateCheck = checkRateLimit(rateKey);
  if (!rateCheck.allowed) {
    return { error: `Too many attempts. Try again in ${rateCheck.retryAfter}s` };
  }

  // Account lockout check
  const lockout = checkAccountLockout(email);
  if (lockout.locked) {
    return { error: `Account locked. Try again in ${lockout.retryAfter}s` };
  }

  const { error } = await auth.signIn.email({ email, password });

  if (error) {
    recordFailedAttempt(email);
    return { error: 'Invalid email or password' };
  }

  clearFailedAttempts(email);
  redirect('/');
}
