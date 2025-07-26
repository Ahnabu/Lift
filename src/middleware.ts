import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // You can add custom middleware logic here
  // For example: authentication, redirects, etc.
  
  // For now, just continue with the request
  const response = NextResponse.next()
  
  // Add custom headers if needed
  response.headers.set('x-pathname', request.nextUrl.pathname)
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
