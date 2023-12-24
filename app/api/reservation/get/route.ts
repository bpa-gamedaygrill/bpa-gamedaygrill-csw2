import db from "../../../../libs/prisma/db";
import { NextResponse } from "next/server";

// Expects date in MM/DD/YYYY

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();  
    const { userId } = body;
    if (!userId) {
      return new NextResponse("User ID is required", { status: 400 })
    }

    const findUser = await db.user.findFirst({
      where: {
        id: userId
      }
    })

    if (!findUser) {
      return new NextResponse("No user with that userId exists", { status: 400 })
    }

    const reservations = await db.reservation.findMany({
      where: {
        userId: userId
      }
    })

    return NextResponse.json({ "data": reservations },{ status: 200 })

  } catch(error) {
    console.log('[CREATE_RESERVATION_POST]', error);
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
