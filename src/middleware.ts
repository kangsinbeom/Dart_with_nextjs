import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 먼저 리다이렉트를 하고 그 후에 쿠키를 설정
  const response = NextResponse.redirect(new URL("/home", request.url));

  const visitPreference = request.cookies.get("visit");

  // 쿠키가 없으면 visit 쿠키를 설정
  if (!visitPreference) {
    response.cookies.set("visit", "true");
  }

  // 최종적으로 수정된 response를 반환
  return response;
}

export const config = {
  matcher: "/",
};
