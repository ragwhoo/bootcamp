'use client';

import { ReactNode } from 'react';
import { BookOpen } from 'lucide-react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background flex w-full h-screen flex-col overflow-hidden">
      <div className="flex flex-1 flex-col lg:flex-row">
        <div className="bg-background/50 relative hidden flex-col justify-between overflow-hidden p-12 lg:flex lg:w-1/2">
          <>
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
              alt="Modern workspace"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </>
        </div>

        <div className="flex flex-1 items-center justify-center px-6 py-12 sm:px-12">
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold tracking-tight">L&D Bootcamp</span>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>

      <footer className="border-border text-muted-foreground flex flex-col items-center justify-between gap-2 border-t px-6 py-4 text-xs sm:flex-row">
        <span>
          © 2026 L&D Bootcamp. All rights reserved.
        </span>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Support</a>
        </div>
      </footer>
    </div>
  );
}
