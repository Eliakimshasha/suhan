import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    // const body = await req.json()
    
   
    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    )
  }
}