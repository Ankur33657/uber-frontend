import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const AUTH_ROUTE = [
  "/",
  "/auth",
  "/auth/usersignup",
  "/auth/userlogin",
  "/auth/captainlogin",
  "/auth/captainsignup",
  "/terms&service",
  "/privacy",
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
  const token = request.cookies.get("token")?.value;
  const isValidJWT = token && token.split(".").length === 3;
  if (isValidJWT && isAuthRoute) {
    return NextResponse.redirect(new URL("/home", request.url));
  } else if (pathname === "/") {
    if (isValidJWT) return NextResponse.redirect(new URL("/home", request.url));
    else return NextResponse.redirect(new URL("/auth", request.url));
  } else if (!isValidJWT && isAuthenticatedRoute)
    return NextResponse.redirect(new URL("/auth", request.url));
  
  return NextResponse.next();
}
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|terms&service|favicon.ico|privacy|.*\\..*).*)",
  ],
};
