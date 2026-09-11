import { auth } from '@/lib/auth/server';
import { NextRequest } from 'next/server';

export const runtime = 'nodejs';

export async function GET(request: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  const authInstance = auth();
  if (!authInstance) {
    console.error('[Auth API] Auth not configured - missing env vars');
    console.error('[Auth API] NEON_AUTH_BASE_URL:', process.env.NEON_AUTH_BASE_URL ? 'SET' : 'MISSING');
    console.error('[Auth API] NEON_AUTH_COOKIE_SECRET:', process.env.NEON_AUTH_COOKIE_SECRET ? 'SET' : 'MISSING');
    return new Response(JSON.stringify({ error: 'Auth not configured' }), { status: 503, headers: { 'Content-Type': 'application/json' } });
  }

  const params = await ctx.params;
  console.log(`[Auth API GET] path=${params.path.join('/')}`);

  const { GET } = authInstance.handler();
  return GET(request, ctx);
}

export async function POST(request: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  const authInstance = auth();
  if (!authInstance) {
    console.error('[Auth API] Auth not configured - missing env vars');
    console.error('[Auth API] NEON_AUTH_BASE_URL:', process.env.NEON_AUTH_BASE_URL ? 'SET' : 'MISSING');
    console.error('[Auth API] NEON_AUTH_COOKIE_SECRET:', process.env.NEON_AUTH_COOKIE_SECRET ? 'SET' : 'MISSING');
    return new Response(JSON.stringify({ error: 'Auth not configured' }), { status: 503, headers: { 'Content-Type': 'application/json' } });
  }

  const params = await ctx.params;
  const subpath = params.path.join('/');
  console.log(`[Auth API POST] path=${subpath}`);

  try {
    const { POST } = authInstance.handler();
    const response = await POST(request, ctx);
    console.log(`[Auth API POST] path=${subpath} status=${response.status}`);
    return response;
  } catch (err) {
    console.error(`[Auth API POST] path=${subpath} error:`, err instanceof Error ? err.message : err);
    return new Response(JSON.stringify({ error: 'Internal error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
