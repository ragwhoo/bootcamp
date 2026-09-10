'use server';

import { auth } from '@/lib/auth/server';
import { redirect } from 'next/navigation';
import { checkRateLimit, validatePassword } from '@/lib/auth/security';

export async function signUpWithEmail(
  _prevState: { error: string } | null,
  formData: FormData
) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password || !name) {
    return { error: 'All fields are required' };
  }

  if (!email.endsWith('@ptp.cloud')) {
    return { error: 'Invalid email domain' };
  }

  const passwordCheck = validatePassword(password);
  if (!passwordCheck.valid) {
    return { error: passwordCheck.error! };
  }

  const rateKey = `signup:${email}`;
  const rateCheck = checkRateLimit(rateKey);
  if (!rateCheck.allowed) {
    return { error: `Too many attempts. Try again in ${rateCheck.retryAfter}s` };
  }

  const { data, error } = await auth.signUp.email({
    email,
    name,
    password,
  });

  if (error) {
    return { error: error.message || 'Failed to create account' };
  }

  // If email verification is required, redirect to verify page
  if (data?.user && !data.user.emailVerified) {
    redirect(`/auth/verify?email=${encodeURIComponent(email)}`);
  }

  redirect('/');
}
