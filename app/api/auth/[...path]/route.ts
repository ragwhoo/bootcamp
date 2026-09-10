import { auth } from '@/lib/auth/server';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  const authInstance = auth();
  if (!authInstance) {
    return new Response('Auth not configured', { status: 503 });
  }
  return authInstance.handler().GET(request, ctx);
}

export async function POST(request: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  const authInstance = auth();
  if (!authInstance) {
    return new Response('Auth not configured', { status: 503 });
  }
  return authInstance.handler().POST(request, ctx);
}
