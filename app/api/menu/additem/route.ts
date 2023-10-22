import { NextResponse } from "next/server";

import db from "../../../../libs/prisma/db";

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();  
    const { itemName, itemDescription, type, itemPrice, imageUrl } = body; 
  
    if (!itemName) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!type) {
      return new NextResponse("Type is required", { status: 400 })
    }

    if (!itemDescription) {
      return new NextResponse("Description is required", { status: 400 });
    }

    if (!itemPrice) {
      return new NextResponse("Price is required", { status: 400 });
    }

    const parsedPrice = parseFloat(itemPrice);

    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      return new NextResponse("Invalid item price", { status: 400 });
    }

    if (!imageUrl) {
      return new NextResponse("Image URL is required", { status: 400 });
    }

    const newMenuItem = await db.menuItem.create({
      data: {
        itemName: itemName,
        itemPrice: itemPrice,
        itemDescription: itemDescription,
        imageUrl: imageUrl,
        type: type
      }
    })

    return NextResponse.json({ "data": newMenuItem }, { status: 201 }) 

  } catch(error) {
    console.log('[CREATE_MENUITEM_POST]', error);
    return new NextResponse("Internal Server Error", { status: 500 })
  } 
}
