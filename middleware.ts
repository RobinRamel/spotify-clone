import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import {  NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    // i'm using the naming env variable so next auth dont need second parameter secret, it detect it by himself
    const token = await getToken({ req })

    const { pathname } = req.nextUrl

    // if try to log or already have token we let them go through
    if (pathname.includes("/api/auth") || token) {
        return NextResponse.next()
    }

    if (!token && pathname !== "/login") {
        const url = req.nextUrl.clone()
        url.pathname = '/login'
        return NextResponse.redirect(url)
    }

}

export const config = {
    matcher: '/',
}