'use client';

import { useActionState } from 'react';
import { signInWithEmail } from './actions';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '@/components/base-ui/button';
import { Input } from '@/components/base-ui/input';
import { Label } from '@/components/base-ui/label';
import { Switch } from '@/components/base-ui/switch';
import { Separator } from '@/components/base-ui/separator';
import AuthLayout from '@/components/AuthLayout';

export default function SignInForm() {
  const [state, formAction, isPending] = useActionState(signInWithEmail, null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <AuthLayout>
      <h2 className="text-foreground text-3xl font-bold tracking-tight">
        Welcome back
      </h2>
      <p className="text-muted-foreground text-sm">
        Sign in to pick up right where you left off.
      </p>

      <Button variant="outline" className="bg-muted w-full gap-2 border-0 font-medium mt-8" disabled>
        <FcGoogle className="text-base" />
        Continue with Google
      </Button>

      <div className="flex items-center gap-3 mt-8">
        <Separator className="flex-1" />
        <span className="text-muted-foreground text-sm font-medium tracking-widest">
          or
        </span>
        <Separator className="flex-1" />
      </div>

      <form action={formAction} className="space-y-5 mt-8">
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
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <button
              type="button"
              className="text-primary text-xs underline-offset-4 transition-all hover:underline"
            >
              Forgot password?
            </button>
          </div>
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

        <div className="flex items-center gap-3">
          <Switch
            id="remember"
            checked={remember}
            onCheckedChange={setRemember}
          />
          <Label
            htmlFor="remember"
            className="text-muted-foreground cursor-pointer text-sm select-none"
          >
            Keep me signed in for 30 days
          </Label>
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
          {isPending ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>

      <p className="text-muted-foreground text-center text-sm mt-8">
        Contact your administrator for account access.
      </p>
    </AuthLayout>
  );
}
