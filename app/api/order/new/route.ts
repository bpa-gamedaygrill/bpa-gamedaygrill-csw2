import { NextResponse } from "next/server";
import db from "../../../../libs/prisma/db";

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();  
    const { fullName, userId, totalPrice } = body;
    if (!fullName) {
      return new NextResponse("Full name is required", { status: 400 })
    }
    if (!totalPrice) {
      return new NextResponse("Total price is required", { status: 400 })
    }
    if (userId) {
      const newOrder = await db.order.create({
        data: {
          purchaseFullName: fullName,
          totalCost: totalPrice as string,
          userId: userId
        }
      })
    } else {
      const newOrder = await db.order.create({
        data: {
          purchaseFullName: fullName,
          totalCost: totalPrice as string,
        }
      })
    }
    return new NextResponse("Success", { status: 201 })
  } catch(error) {
    console.log('[CREATE_ORDER_POST]', error);
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
