import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

const publicRoutes = ["/auth/signin", "/auth/signout"];

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const redirect =
    pathname === "/" || pathname === "/auth/signin"
      ? ""
      : `?redirect=${pathname}`;

  const isPublicRoute = publicRoutes.some((prefix) =>
    request.nextUrl.pathname.startsWith(prefix),
  );

  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Fetch the session token
  const token = await getToken({ req: request, secret });

  if (!token) {
    return NextResponse.redirect(
      new URL(`/auth/signin${redirect}`, request.url).toString(),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
