"use client";

import { useState, useEffect } from 'react';
import { authClient } from '@/lib/auth/client';
import { Button } from '@/components/base-ui/button';
import { Input } from '@/components/base-ui/input';
import { Label } from '@/components/base-ui/label';
import { Card } from '@/components/ui/card';
import { User, Lock, CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react';

export default function ProfilePage() {
  const [user, setUser] = useState<{ name?: string; email?: string; id?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    authClient.getSession()
      .then(({ data }) => {
        if (data?.user) {
          setUser(data.user);
        }
      })
      .catch(() => {
        setError('Failed to load session. Please refresh.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (newPassword.length < 8) {
      setError('New password must be at least 8 characters');
      return;
    }
    if (!/[A-Z]/.test(newPassword) || !/[a-z]/.test(newPassword) || !/[0-9]/.test(newPassword)) {
      setError('Password must include uppercase, lowercase, and a number');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (currentPassword === newPassword) {
      setError('New password must be different from current password');
      return;
    }

    setSubmitting(true);
    try {
      const { error: changeError } = await authClient.changePassword({
        currentPassword,
        newPassword,
      });

      if (changeError) {
        setError(changeError.message || 'Failed to change password. Check your current password.');
        setSubmitting(false);
        return;
      }

      setSuccess('Password changed successfully');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch {
      setError('Something went wrong. Please try again.');
    }
    setSubmitting(false);
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="bg-muted h-8 w-8 animate-pulse rounded-full" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8 py-12">
      <h1 className="text-foreground text-3xl font-bold tracking-tight">Profile</h1>

      <Card className="bg-card border-border p-6">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-full">
            <User className="text-primary h-8 w-8" />
          </div>
          <div>
            <p className="text-foreground text-lg font-semibold">{user?.name || 'User'}</p>
            <p className="text-muted-foreground text-sm">{user?.email}</p>
          </div>
        </div>
      </Card>

      <Card className="bg-card border-border p-6">
        <div className="mb-6 flex items-center gap-2">
          <Lock className="text-primary h-5 w-5" />
          <h2 className="text-foreground text-xl font-semibold">Change Password</h2>
        </div>

        <form onSubmit={handleChangePassword} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="currentPassword" className="text-foreground text-sm font-medium">
              Current Password
            </Label>
            <div className="relative">
              <Input
                id="currentPassword"
                type={showCurrent ? 'text' : 'password'}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="••••••••••"
                className="bg-muted h-10 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowCurrent((v) => !v)}
                className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 transition-colors"
              >
                {showCurrent ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="newPassword" className="text-foreground text-sm font-medium">
              New Password
            </Label>
            <div className="relative">
              <Input
                id="newPassword"
                type={showNew ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••••"
                className="bg-muted h-10 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowNew((v) => !v)}
                className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 transition-colors"
              >
                {showNew ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            <p className="text-muted-foreground text-xs">
              Min 8 characters, with uppercase, lowercase, and a number.
            </p>
          </div>

          <div className="space-y-1">
            <Label htmlFor="confirmPassword" className="text-foreground text-sm font-medium">
              Confirm New Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••••"
              className="bg-muted h-10"
              required
            />
          </div>

          {error && (
            <div className="bg-destructive/10 text-destructive flex items-center gap-2 rounded-lg px-4 py-3 text-sm">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          {success && (
            <div className="flex items-center gap-2 rounded-lg bg-green-500/10 px-4 py-3 text-sm text-green-600 dark:text-green-400">
              <CheckCircle className="h-4 w-4 shrink-0" />
              {success}
            </div>
          )}

          <Button type="submit" disabled={submitting} className="h-10 w-full font-semibold">
            {submitting ? 'Updating...' : 'Update Password'}
          </Button>
        </form>
      </Card>
    </div>
  );
}
