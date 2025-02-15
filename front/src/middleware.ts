import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("cookieToken");

  const publicRoutes = ["/login", "/login/register"];
  if (token && publicRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/profile-dashboard", request.url));
  }

  const protectedRoutes = ["/profile-dashboard", "/profile-dashboard/orders"];

  if (
    !token &&
    protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login/register", "/login", "/profile-dashboard/:path*"],
};
