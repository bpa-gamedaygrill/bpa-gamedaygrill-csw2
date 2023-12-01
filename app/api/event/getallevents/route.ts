import { NextResponse } from "next/server";

import db from "../../../../libs/prisma/db";


export async function GET(
  request: Request
) {
  try {
    const headers = request.headers;
    const events = await db.event.findMany();
    return NextResponse.json({ "data": events }, { status: 200 });
  }
  catch(error) {
    console.log('[CREATE_EVENT_POST]', error);
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}

// Make route dynamic (no-cache)
export const revalidate = 0;
