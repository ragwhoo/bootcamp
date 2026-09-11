import { NextRequest } from 'next/server';

const NEON_AUTH_URL = process.env.NEON_AUTH_BASE_URL;

export async function GET(request: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  if (!NEON_AUTH_URL) {
    return new Response('Auth not configured', { status: 503 });
  }

  const params = await ctx.params;
  const targetUrl = `${NEON_AUTH_URL}/${params.path.join('/')}`;
  const url = new URL(targetUrl);
  request.nextUrl.searchParams.forEach((value, key) => {
    url.searchParams.set(key, value);
  });

  const headers = new Headers();
  request.headers.forEach((value, key) => {
    if (key.toLowerCase() !== 'host') {
      headers.set(key, value);
    }
  });

  const cookieHeader = request.headers.get('cookie');
  if (cookieHeader) {
    headers.set('cookie', cookieHeader);
  }

  const res = await fetch(url.toString(), {
    method: 'GET',
    headers,
  });

  const body = await res.text();
  const responseHeaders = new Headers();
  res.headers.forEach((value, key) => {
    if (key.toLowerCase() !== 'transfer-encoding') {
      responseHeaders.set(key, value);
    }
  });

  return new Response(body, {
    status: res.status,
    headers: responseHeaders,
  });
}

export async function POST(request: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  if (!NEON_AUTH_URL) {
    return new Response('Auth not configured', { status: 503 });
  }

  const params = await ctx.params;
  const targetUrl = `${NEON_AUTH_URL}/${params.path.join('/')}`;
  const body = await request.text();

  const headers = new Headers();
  headers.set('content-type', request.headers.get('content-type') || 'application/json');

  const cookieHeader = request.headers.get('cookie');
  if (cookieHeader) {
    headers.set('cookie', cookieHeader);
  }

  const origin = request.headers.get('origin');
  if (origin) {
    headers.set('origin', origin);
  }

  const res = await fetch(targetUrl, {
    method: 'POST',
    headers,
    body,
  });

  const responseBody = await res.text();
  const responseHeaders = new Headers();
  res.headers.forEach((value, key) => {
    if (key.toLowerCase() !== 'transfer-encoding') {
      responseHeaders.set(key, value);
    }
  });

  return new Response(responseBody, {
    status: res.status,
    headers: responseHeaders,
  });
}
