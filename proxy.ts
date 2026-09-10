import { auth } from '@/lib/auth/server';

export default auth.middleware({
  loginUrl: '/auth/sign-in',
});

export const config = {
  matcher: [
    '/((?!auth|_next|api/auth|favicon.ico|robots.txt).*)',
  ],
};
