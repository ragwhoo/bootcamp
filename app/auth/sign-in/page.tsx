'use client';

import { useActionState } from 'react';
import { checkSignInAllowed, recordSignInFailure, clearSignInAttempts } from './actions';
import { useState } from 'react';
import { authClient } from '@/lib/auth/client';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/base-ui/button';
import { Input } from '@/components/base-ui/input';
import { Label } from '@/components/base-ui/label';
import AuthLayout from '@/components/AuthLayout';

export default function SignInForm() {
  const [state, formAction, isPending] = useActionState(checkSignInAllowed, null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (state && !state.allowed) {
      setError(state.error);
      setLoading(false);
      return;
    }

    try {
      const { error: signInError } = await authClient.signIn.email({
        email,
        password,
      });

      if (signInError) {
        await recordSignInFailure(email);
        setError('Invalid email or password');
        setLoading(false);
        return;
      }

      await clearSignInAttempts(email);
      window.location.href = '/';
    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-foreground text-3xl font-bold tracking-tight">
        Welcome back
      </h2>
      <p className="text-muted-foreground text-sm">
        Sign in to pick up right where you left off.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5 mt-8">
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
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading || isPending}
          className="h-11 w-full text-base font-semibold"
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>

      <p className="text-muted-foreground text-center text-sm mt-8">
        Contact your administrator for account access.
      </p>
    </AuthLayout>
  );
}
