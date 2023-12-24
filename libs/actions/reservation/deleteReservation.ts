"use server"

import db from "../../prisma/db";
import { unstable_noStore as noStore } from 'next/cache';

export default async function deleteReservation(id: string) {
  noStore();
  try {
    const deleted = await db.reservation.delete({
      where: {
        id: id
      }
    })
    return "success";
  } catch(error) {
    console.log('[DELETE_RESERVATION_ACTION_ERROR]', error)
    return null
  }
}
