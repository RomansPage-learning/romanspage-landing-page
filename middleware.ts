import { NextResponse, type NextRequest } from 'next/server';

const isDev = process.env.NODE_ENV !== 'production';

function generateNonce(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return btoa(String.fromCharCode(...bytes));
}

function buildCsp(nonce: string): string {
  const imgSrc = [
    "'self'",
    'data:',
    'blob:',
    'https://img.youtube.com',
  ];

  const connectSrc = [
    "'self'",
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    ...(isDev ? ['ws:', 'wss:'] : []),
  ];

  const scriptSrc = [
    "'self'",
    `'nonce-${nonce}'`,
    ...(isDev ? ["'unsafe-inline'", "'unsafe-eval'"] : []),
  ];

  return [
    "default-src 'self'",
    `img-src ${imgSrc.join(' ')}`,
    `script-src ${scriptSrc.join(' ')}`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    `connect-src ${connectSrc.join(' ')}`,
    "frame-ancestors 'none'",
  ].join('; ');
}

export function middleware(request: NextRequest) {
  const nonce = generateNonce();
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set('Content-Security-Policy', buildCsp(nonce));

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};