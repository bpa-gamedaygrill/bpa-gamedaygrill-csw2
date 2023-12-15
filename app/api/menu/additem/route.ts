import { NextResponse } from "next/server";

import db from "../../../../libs/prisma/db";


export async function POST(
  req: Request
) {
  try {
    const body = await req.json();  
    const { itemName, itemDescription, type, itemPrice, imageUrl, isVegetarian } = body; 
  
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

    let data: {
      itemName: string;
      itemPrice: string;
      itemDescription: string;
      imageUrl: string;
      type: string;
      isVegetarian?: boolean;
    } = {
        itemName: itemName,
        itemPrice: itemPrice,
        itemDescription: itemDescription,
        imageUrl: imageUrl,
        type: type,
        isVegetarian: false
    }

    if (isVegetarian && isVegetarian==true) {
      data = {
          itemName: itemName,
          itemPrice: itemPrice,
          itemDescription: itemDescription,
          imageUrl: imageUrl,
          isVegetarian: true,
          type: type
      }
    }

    const newMenuItem = await db.menuItem.create({
      data: data
    })

    return NextResponse.json({ "data": newMenuItem }, { status: 201 }) 

  } catch(error) {
    console.log('[CREATE_MENUITEM_POST]', error);
    return new NextResponse("Internal Server Error", { status: 500 })
  } 
}
