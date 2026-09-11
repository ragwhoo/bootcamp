import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    NEON_AUTH_BASE_URL: process.env.NEON_AUTH_BASE_URL ? process.env.NEON_AUTH_BASE_URL.substring(0, 40) + '...' : 'MISSING',
    NEON_AUTH_COOKIE_SECRET: process.env.NEON_AUTH_COOKIE_SECRET ? 'SET (len=' + process.env.NEON_AUTH_COOKIE_SECRET.length + ')' : 'MISSING',
    NEON_AUTH_JWKS_URL: process.env.NEON_AUTH_JWKS_URL ? 'SET' : 'MISSING',
    DATABASE_URL: process.env.DATABASE_URL ? 'SET' : 'MISSING',
    NODE_ENV: process.env.NODE_ENV,
    VERCEL: process.env.VERCEL || 'not-vercel',
    VERCEL_ENV: process.env.VERCEL_ENV || 'not-set',
  });
}
