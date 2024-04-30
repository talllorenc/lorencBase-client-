import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { ITokenInside } from "./types/AuthFormData";

export async function middleware(request: NextRequest, response: NextResponse) {
  const refreshToken = request.cookies.get("jwt")?.value;
  const isAdminPage = request.url.includes("/admin");
  const isCreateNotePage = request.url.includes("/create-note");

  if (!refreshToken) {
    return redirectToLogin(isAdminPage, request);
  }

  try {
    const { payload }: { payload: ITokenInside } = await jwtVerify(
      refreshToken,
      new TextEncoder().encode(`${process.env.JWT_SECRET_REFRESH}`)
    );

    if (payload?.role === "admin") return NextResponse.next();

    if (isAdminPage || isCreateNotePage) {
      return NextResponse.redirect(new URL("/404", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes("exp claim timestamp check failed")
    ) {
      console.log("The token has expired");
      return redirectToLogin(isAdminPage, request);
    }

    console.log("Error during token verification: ", error);
    return redirectToLogin(isAdminPage, request);
  }
}

export const config = {
  matcher: [
    '/create-note/:path*',
    '/admin/:path*',
    '/profile/:path*'
  ],
};

const redirectToLogin = (isAdminPage: boolean, request: NextRequest) => {
  return NextResponse.redirect(
    new URL(isAdminPage ? "/404" : "/login", request.url)
  );
};
