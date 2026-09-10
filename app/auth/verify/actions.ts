'use server';

import { auth } from '@/lib/auth/server';
import { redirect } from 'next/navigation';

export async function verifyEmail(
  _prevState: { error: string } | null,
  formData: FormData
) {
  const email = formData.get('email') as string;
  const otp = formData.get('otp') as string;

  if (!email || !otp) {
    return { error: 'Email and verification code are required' };
  }

  const authInstance = auth();
  if (!authInstance) {
    return { error: 'Auth service unavailable' };
  }

  const { error } = await authInstance.emailOtp.verifyEmail({
    email,
    otp,
  });

  if (error) {
    return { error: error.message || 'Invalid or expired verification code' };
  }

  redirect('/');
}
