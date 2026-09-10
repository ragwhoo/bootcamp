'use client';

import { useActionState, Suspense } from 'react';
import { verifyEmail } from './actions';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/base-ui/button';
import { Input } from '@/components/base-ui/input';
import { Label } from '@/components/base-ui/label';
import { Separator } from '@/components/base-ui/separator';
import AuthLayout from '@/components/AuthLayout';

function VerifyForm() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';
  const [state, formAction, isPending] = useActionState(verifyEmail, null);

  return (
    <AuthLayout>
      <h2 className="text-foreground text-3xl font-bold tracking-tight">
        Verify your email
      </h2>
      <p className="text-muted-foreground text-sm">
        Enter the 6-digit code sent to <span className="text-foreground font-medium">{email}</span>
      </p>

      <div className="flex items-center gap-3 mt-8">
        <Separator className="flex-1" />
        <span className="text-muted-foreground text-sm font-medium tracking-widest">
          verification
        </span>
        <Separator className="flex-1" />
      </div>

      <form action={formAction} className="space-y-5 mt-8">
        <input type="hidden" name="email" value={email} />

        <div className="space-y-1">
          <Label htmlFor="otp" className="text-sm font-medium">
            Verification Code
          </Label>
          <Input
            id="otp"
            name="otp"
            type="text"
            placeholder="000000"
            maxLength={6}
            className="bg-muted focus-visible:ring-primary/20 focus-visible:border-primary/50 h-10 border-transparent ring-0 text-center text-lg tracking-[0.5em]"
            required
          />
        </div>

        {state?.error && (
          <div className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {state.error}
          </div>
        )}

        <Button
          type="submit"
          disabled={isPending}
          className="h-11 w-full text-base font-semibold"
        >
          {isPending ? 'Verifying...' : 'Verify Email'}
        </Button>
      </form>

      <p className="text-muted-foreground text-center text-sm mt-8">
        Didn&apos;t receive a code?{' '}
        <button
          type="button"
          className="text-primary font-medium underline-offset-4 transition-all hover:underline"
        >
          Resend code
        </button>
      </p>
    </AuthLayout>
  );
}

export default function VerifyPage() {
  return (
    <Suspense>
      <VerifyForm />
    </Suspense>
  );
}
