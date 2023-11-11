import { NextResponse } from "next/server";

import db from "../../../../libs/prisma/db";

export async function POST(
  request: Request
) {
  try {
    const headers = request.headers;
    const body = await request.json();
    const { itemId } = body;

    if (!itemId) {
      return new NextResponse("Item id is required", { status: 400 });
    }

    const deleteItem = await db.menuItem.delete({
      where: {
        id: itemId
      }
    }) 
    return NextResponse.json({ "data": "success" }, {status: 200} )
  } catch(error) {
    console.log('[DELETE_MENUITEM_POST]', error);
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
