import { auth } from '@/lib/auth/server';
import { NextRequest } from 'next/server';

const authInstance = auth();

function middleware(request: NextRequest) {
  if (!authInstance) {
    return new Response(null, { status: 200 });
  }
  return authInstance.middleware({ loginUrl: '/auth/sign-in' })(request);
}

export default middleware;

export const config = {
  matcher: [
    '/((?!auth|_next|api/auth|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
