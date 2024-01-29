import { NextRequest, NextResponse } from 'next/server'
import { get } from '@vercel/edge-config'

export const config = { matcher: '/welcome' }

export async function middleware(request: NextRequest) {
  // const greeting = await get('greeting')
  // return NextResponse.json(greeting)
}
