import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const pathname = req.nextUrl.pathname;

  const isAuthPage = pathname === "/login";

  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/posts", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/users/:path*", "/posts/:path*"],
};
