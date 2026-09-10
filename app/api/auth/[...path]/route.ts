import { auth } from '@/lib/auth/server';
import { NextRequest } from 'next/server';
import { checkRateLimit } from '@/lib/auth/security';

export async function GET(request: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  const authInstance = auth();
  if (!authInstance) {
    return new Response('Auth not configured', { status: 503 });
  }
  return authInstance.handler().GET(request, ctx);
}

export async function POST(request: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  const params = await ctx.params;
  const isSignIn = params.path[0] === 'sign-in' && params.path[1] === 'email';

  if (isSignIn) {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || request.headers.get('x-real-ip')
      || 'unknown';
    const rateCheck = await checkRateLimit(`api:signin:${ip}`);
    if (!rateCheck.allowed) {
      return Response.json(
        { error: `Too many attempts. Try again in ${rateCheck.retryAfter}s` },
        { status: 429 }
      );
    }
  }

  const authInstance = auth();
  if (!authInstance) {
    return new Response('Auth not configured', { status: 503 });
  }
  return authInstance.handler().POST(request, ctx);
}
