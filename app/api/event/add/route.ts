import { NextResponse } from "next/server";

import db from "../../../../libs/prisma/db";


export async function POST(
  req: Request
) {
  try {
    const body = await req.json();  
    const { eventName, eventDescription, eventDate, imageUrl } = body;
    if (!eventName) {
      return new NextResponse("Event Name is required", { status: 400 });
    }
    if (!eventDescription) {
      return new NextResponse("Event Description is required", { status: 400 });
    }
    if (!eventDate) {
      return new NextResponse("Event Date is required", { status: 400 });
    }
    if (!imageUrl) {
      return new NextResponse("Image Url is required", { status: 400 });
    }
    const parsedDate = new Date(`${eventDate}T00:00:00Z`);
    if (isNaN(parsedDate.getTime())) {
      return new NextResponse("Invalid date format for eventDate", {
        status: 400,
      });
    }
    if (parsedDate.getTime() < new Date().getTime()) {
      return new NextResponse("Event date has passed", {
        status: 400,
      });
    }

    const newEvent = await db.event.create({
      data: {
        eventName: eventName,
        eventDescription: eventDescription,
        imageUrl: imageUrl,
        eventDate: parsedDate,
      }
    })

    return new NextResponse("Event created successfully", { status: 201 });
  }
  catch(error) {
    console.log('[CREATE_EVENT_POST]', error);
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
