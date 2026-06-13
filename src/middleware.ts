import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const NOINDEX_PATTERNS = [
  /^\/api\//,
  /^\/workspace\//,
];

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  let isRedirecting = false;

  // Redirect to HTTPS if we're not running locally and not already on HTTPS
  if (
    process.env.NODE_ENV === 'production' &&
    request.headers.get('x-forwarded-proto') !== 'https' &&
    !url.hostname.includes('localhost')
  ) {
    url.protocol = 'https:';
    isRedirecting = true;
  }

  // Handle trailing slashes explicitly by redirecting to the version without a trailing slash
  // (Next.js can do this but middleware enforces it completely)
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
    isRedirecting = true;
  }

  if (isRedirecting) {
    return NextResponse.redirect(url, 301);
  }

  const res = NextResponse.next();

  if (NOINDEX_PATTERNS.some(p => p.test(url.pathname))) {
    res.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return res;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|favicon.ico).*)',
  ],
};
