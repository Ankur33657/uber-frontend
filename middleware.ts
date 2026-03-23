import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const AUTH_ROUTE = [
  "/",
  "/auth",
  "/auth/usersignup",
  "/auth/userlogin",
  "/auth/captainlogin",
  "/auth/captainsignup",
];
const AUTHENTICATED_ROUTE = [
  "/activity",
  "/community",
  "/home",
  "/profile",
  "/wallet",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthRoute = AUTH_ROUTE.some((item) => pathname === item);
  const isAuthenticatedRoute = AUTHENTICATED_ROUTE.some((item) =>
    pathname.startsWith(item),
  );
  const token = request.cookies.get("token");
  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/home", request.url));
  } else if (!token && isAuthenticatedRoute) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
