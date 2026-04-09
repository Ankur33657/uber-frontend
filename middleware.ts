import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const AUTH_ROUTE = [
  "/",
  "/auth",
  "/auth/usersignup",
  "/auth/userlogin",
  "/auth/captainlogin",
  "/terms&service",
  "/privacy",
  "/auth/callback",
];
const USER_AUTHENTICATED_ROUTE = [
  "/auth/captainsignup",
  "/activity",
  "/community",
  "/home",
  "/profile",
  "/wallet",
];

const COMMON_ROUTE = ["/community"];

const CAPTAIN_AUTHENTICATED_ROUTE = [
  "/captain/home",
  "/captain/earning",
  "/community",
  "/captain/account",
];


export const AUTHENTICATED_WITHOUT_NAVBAR = ["/createstory", "viewstory"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthRoute = AUTH_ROUTE.some((item) => pathname === item);
  const isUserAuthenticatedRoute = USER_AUTHENTICATED_ROUTE.some((item) =>
    pathname.startsWith(item),
  );
  const isCaptainAuthenticatedRoute = CAPTAIN_AUTHENTICATED_ROUTE.some((item) =>
    pathname.startsWith(item),
  );
  const isCommonRoute = COMMON_ROUTE.some((item) => pathname.startsWith(item));
  const token = request.cookies.get("token")?.value;
  const captainToken = request.cookies.get("captainToken")?.value;
  const isValidJWT = true; // later implement some token validation
  if (isValidJWT && isAuthRoute) {
    if (captainToken) {
      return NextResponse.redirect(new URL("/captain/home", request.url));
    }
    return NextResponse.redirect(new URL("/home", request.url));
  } else if (pathname === "/") {
    if (isValidJWT)
      return NextResponse.redirect(
        new URL(`${captainToken ? "/captain/home" : "home"}`, request.url),
      );
    else return NextResponse.redirect(new URL("/auth", request.url));
  } else if (
    !isValidJWT &&
    (isUserAuthenticatedRoute || isCaptainAuthenticatedRoute)
  )
    return NextResponse.redirect(new URL("/auth", request.url));

  if (captainToken && isUserAuthenticatedRoute && !isCommonRoute) {
    return NextResponse.redirect(new URL("/captain/home", request.url));
  }

  if (token && isCaptainAuthenticatedRoute && !isCommonRoute) {
    return NextResponse.redirect(new URL("/home", request.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|terms&service|favicon.ico|privacy|.*\\..*).*)",
  ],
};
