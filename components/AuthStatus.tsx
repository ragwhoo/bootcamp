'use client';

import Link from 'next/link';
import { authClient } from '@/lib/auth/client';
import { LogIn, LogOut, User } from 'lucide-react';
import { useEffect, useState } from 'react';

export function AuthStatus() {
  const [user, setUser] = useState<{ name?: string; email?: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authClient.getSession().then((result) => {
      if (result.data?.user) {
        setUser(result.data.user);
      }
      setLoading(false);
    });
  }, []);

  const handleSignOut = async () => {
    await authClient.signOut();
    window.location.href = '/';
  };

  if (loading) {
    return (
      <div className="h-8 w-8 animate-pulse rounded-full bg-white/10" />
    );
  }

  if (user) {
    return (
      <div className="flex items-center gap-2">
        <span className="hidden text-sm text-gray-400 sm:inline">
          {user.name || user.email}
        </span>
        <Link
          href="/profile"
          className="flex items-center gap-1.5 rounded-lg border border-white/20 px-3 py-1.5 text-sm text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <User className="h-4 w-4" />
          <span className="hidden sm:inline">Profile</span>
        </Link>
        <button
          onClick={handleSignOut}
          className="flex items-center gap-1.5 rounded-lg border border-white/20 px-3 py-1.5 text-sm text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline">Sign Out</span>
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/auth/sign-in"
      className="flex items-center gap-1.5 rounded-lg border border-white/20 px-3 py-1.5 text-sm text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
    >
      <LogIn className="h-4 w-4" />
      <span className="hidden sm:inline">Sign In</span>
    </Link>
  );
}
