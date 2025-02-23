import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const allowedPaths = [
  "/home",
  "/intro",
  "/login",
  "/signup",
  "/signup/agree",
  "/signup/info",
];

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;
  // 정해진 url만 출입하고 임의로 사용자가 입력해서 잘못된 경로일 경우에는 home으로 보내는 부분
  if (!allowedPaths.includes(url)) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  // 회원가입 시 step1을 거치지 않았다면 접근할 수 없음
  const agreement = request.cookies.get("agreement")?.value || false;
  if (url === "/signup/info" && !agreement) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|images/.*).*)",
  ],
};
