import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest, response: NextResponse) {
  const refreshToken = request.cookies.get("jwt")?.value;
  let accessToken = request.cookies.get("accessToken")?.value;
  const isAdminPage = request.url.includes("/admin");
  const isCreateNotePage = request.url.includes("/create-note");

  if (!refreshToken) {
    request.cookies.delete("accessToken");
    return redirectToLogin(isAdminPage || isCreateNotePage, request);
  }

  if (!accessToken) {
    try {
      const data = await fetch("http://localhost:8080/api/auth/refresh", {
        method: "GET",
        headers: {
          Cookie: `jwt=${refreshToken}`,
        },
      });

      const result = await data.json();
      accessToken = result.accessToken;
    } catch (error) {
      request.cookies.delete("accessToken");
      return redirectToLogin(isAdminPage || isCreateNotePage, request)
    }
  }

  try {
    if (!accessToken) {
      throw new Error("Access token is not available");
    }

    const { payload }: { payload: any } = await jwtVerify(
      accessToken,
      new TextEncoder().encode(process.env.JWT_SECRET_KEY)
    );

    if (payload?.UserInfo.role === "admin") return NextResponse.next();

    if (isAdminPage || isCreateNotePage) {
      return redirectToLogin(isAdminPage || isCreateNotePage, request)
    }

    return NextResponse.next();
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes("exp claim timestamp check failed")
    ) {
      console.log("Токен истек");
      return redirectToLogin(isAdminPage || isCreateNotePage, request)
    }

    console.log("Ошибка при верификации токена: ", error);
    return redirectToLogin(isAdminPage || isCreateNotePage, request)
  }
}

export const config = {
  matcher: ["/admin/:path*", "/create-note/:path*", "/profile/:path*"],
};

const redirectToLogin = (isAdminPage: boolean, request: NextRequest) => {
  return NextResponse.redirect(
    new URL(isAdminPage ? "/404" : "/login", request.url)
  );
};
