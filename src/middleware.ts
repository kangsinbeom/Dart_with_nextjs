import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // matcher에 정해진 값 외에는 /home으로 가게하고 싶은데...
  const allowedPaths = [
    "/home",
    "/intro",
    "/login",
    "/signup",
    "/signup/agree",
    "/signup/info",
  ];

  const url = request.nextUrl.pathname;
  console.log(url);
  if (!allowedPaths.includes(url)) {
    return NextResponse.redirect(new URL("/home", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
