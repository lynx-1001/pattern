// middleware.js
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // ถ้า Path คือหน้าแรกพอดี
  if (request.nextUrl.pathname === '/') {
    // สร้าง URL ใหม่ไปยังหน้า Login แล้ว Redirect
    const loginUrl = new URL('/auth/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next(); // ไปต่อถ้าไม่ใช่หน้าแรก
}

// กำหนดให้ Middleware ทำงานเฉพาะที่ Path ที่ต้องการ (ในที่นี้คือหน้าแรก)
export const config = {
  matcher: ['/'],
}