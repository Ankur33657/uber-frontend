import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const AUTH_ROUTE = [
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
  const isAuthRoute = AUTH_ROUTE.some((item) => pathname.includes(item));
  const isAuthenticatedRoute = AUTHENTICATED_ROUTE.some((item) =>
    pathname.includes(item),
  );
  if (isAuthRoute) {
    return NextResponse.next();
  } else if (isAuthenticatedRoute) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/auth", request.url));
  }
}
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
