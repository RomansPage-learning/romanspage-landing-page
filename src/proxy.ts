import { NextResponse, type NextRequest } from 'next/server';

const isDev = process.env.NODE_ENV !== 'production';
const hstsValue = 'max-age=31536000; includeSubDomains';
const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';
const MAINTENANCE_PATH = '/under-construction';

const getApiHostname = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) return '';

  try {
    return new URL(apiUrl).hostname;
  } catch {
    return '';
  }
};

const apiHostname = getApiHostname();

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
    ...(apiHostname ? [`https://${apiHostname}`] : []),
  ];

  const connectSrc = [
    "'self'",
    ...(apiHostname ? [`https://${apiHostname}`] : []),
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

export function proxy(request: NextRequest) {
  const nonce = generateNonce();
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  const { pathname } = request.nextUrl;
  const isMaintenancePage = pathname === MAINTENANCE_PATH;
  const isApiRoute = pathname.startsWith('/api');
  const isStaticAsset = /\.[a-zA-Z0-9]+$/.test(pathname);

  let response: NextResponse;
  if (isMaintenanceMode && !isMaintenancePage && !isApiRoute && !isStaticAsset) {
    const url = request.nextUrl.clone();
    url.pathname = MAINTENANCE_PATH;
    response = NextResponse.rewrite(url, { request: { headers: requestHeaders } });
  } else {
    response = NextResponse.next({ request: { headers: requestHeaders } });
  }

  response.headers.set('Content-Security-Policy', buildCsp(nonce));
  if (!isDev) {
    response.headers.set('Strict-Transport-Security', hstsValue);
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
