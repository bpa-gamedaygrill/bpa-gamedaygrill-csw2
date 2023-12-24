import db from "../../../../libs/prisma/db";
import { parse, isValid, format } from 'date-fns';
import { enGB } from 'date-fns/locale';
import { NextResponse } from "next/server";

// Expects date in MM/DD/YYYY
function isValidDate(date: string) {
  const parsed = parse(`${date}`, 'MM/dd/yyyy', new Date(), { locale: enGB })
  return isValid(parsed) ? parsed : null;
}

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();  
    const { userId, date } = body;
    if (!userId) {
      return new NextResponse("User ID is required", { status: 400 })
    }
    if (!date) {
      return new NextResponse("Date is required", { status: 400 })
    }

    const convertedDate = isValidDate(date)
    if (!convertedDate) {
      return new NextResponse("Date is invalid", { status: 400 })
    }
    
    const findUser = await db.user.findFirst({
      where: {
        id: userId
      }
    })

    if (!findUser) {
      return new NextResponse("No user with that userId exists", { status: 400 })
    }

    const newReservation = await db.reservation.create({
      data: {
        userId: userId,
        reservationDate: convertedDate
      }
    })

    return new NextResponse("Success", { status: 201 })

  } catch(error) {
    console.log('[CREATE_RESERVATION_POST]', error);
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
