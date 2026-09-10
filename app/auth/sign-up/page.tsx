'use client';

import { useActionState } from 'react';
import { signUpWithEmail } from './actions';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '@/components/base-ui/button';
import { Input } from '@/components/base-ui/input';
import { Label } from '@/components/base-ui/label';
import { Separator } from '@/components/base-ui/separator';
import AuthLayout from '@/components/AuthLayout';

export default function SignUpForm() {
  const [state, formAction, isPending] = useActionState(signUpWithEmail, null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout>
      <h2 className="text-foreground text-3xl font-bold tracking-tight">
        Create account
      </h2>
      <p className="text-muted-foreground text-sm">
        Sign up with your work email to get started.
      </p>

      <div className="flex items-center gap-3 mt-8">
        <Separator className="flex-1" />
        <span className="text-muted-foreground text-sm font-medium tracking-widest">
          or
        </span>
        <Separator className="flex-1" />
      </div>

      <form action={formAction} className="space-y-5 mt-8">
        <div className="space-y-1">
          <Label htmlFor="name" className="text-sm font-medium">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-muted focus-visible:ring-primary/20 focus-visible:border-primary/50 h-10 border-transparent ring-0"
            required
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="email" className="text-sm font-medium">
            Work Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@ptp.cloud"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-muted focus-visible:ring-primary/20 focus-visible:border-primary/50 h-10 border-transparent ring-0"
            required
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="password" className="text-sm font-medium">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-muted focus-visible:ring-primary/20 focus-visible:border-primary/50 h-10 border-transparent pr-10 ring-0"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 transition-colors"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
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
          {isPending ? 'Creating account...' : 'Create Account'}
        </Button>
      </form>

      <p className="text-muted-foreground text-center text-sm mt-8">
        Already have an account?{' '}
        <Link
          href="/auth/sign-in"
          className="text-primary font-medium underline-offset-4 transition-all hover:underline"
        >
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}
