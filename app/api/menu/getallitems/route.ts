import { NextResponse } from "next/server";
import db from "../../../../libs/prisma/db";

export async function GET(
  req: Request
) {
  try {
    const menuItems = await db.menuItem.findMany();
  
    return NextResponse.json({ "data": menuItems }, { status: 200 })
  } catch(error) {
    console.log('[GET_MENUITEMS_GET]', error);
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
