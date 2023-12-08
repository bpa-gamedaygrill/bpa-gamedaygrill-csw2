import { NextResponse } from "next/server";
import db from "../../../../libs/prisma/db";

export async function DELETE(
  request: Request
) {
  try {
    const headers = request.headers;
    const events = await db.event.findMany();
    const currentDate = new Date();
    const eventsToDelete = events.filter((event) => {
      return event.eventDate < currentDate;
    });
    for (const eventToDelete of eventsToDelete) {
      await db.event.delete({
        where: { id: eventToDelete.id }, 
      });
    }
    return new NextResponse("Successfully deleted items", { status: 200 })
  }
  catch(error) {
    console.log('[DELETEOUTDATED_EVENT_POST]', error);
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
