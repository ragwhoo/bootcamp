import { createNeonAuth } from '@neondatabase/auth/next/server';

function getAuth() {
  const secret = process.env.NEON_AUTH_COOKIE_SECRET;
  if (!secret) {
    // During build time, env vars may not be available
    // Return a no-op middleware that doesn't protect any routes
    return null;
  }

  return createNeonAuth({
    baseUrl: process.env.NEON_AUTH_BASE_URL!,
    cookies: {
      secret,
    },
  });
}

let _auth: ReturnType<typeof getAuth>;

export function auth() {
  if (!_auth) {
    _auth = getAuth();
  }
  return _auth;
}
