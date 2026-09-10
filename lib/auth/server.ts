import { createNeonAuth } from '@neondatabase/auth/next/server';

const secret = process.env.NEON_AUTH_COOKIE_SECRET;
if (!secret) {
  throw new Error('NEON_AUTH_COOKIE_SECRET is required. Generate one with: openssl rand -base64 32');
}

export const auth = createNeonAuth({
  baseUrl: process.env.NEON_AUTH_BASE_URL!,
  cookies: {
    secret,
  },
});
