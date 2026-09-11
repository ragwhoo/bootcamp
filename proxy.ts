import { auth } from '@/lib/auth/server';
import { NextRequest } from 'next/server';

function middleware(request: NextRequest) {
  const authInstance = auth();
  if (!authInstance) {
    return new Response(null, { status: 200 });
  }
  return authInstance.middleware({ loginUrl: '/auth/sign-in' })(request);
}

export default middleware;

export const config = {
  matcher: [
    '/((?!auth|_next|api|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
