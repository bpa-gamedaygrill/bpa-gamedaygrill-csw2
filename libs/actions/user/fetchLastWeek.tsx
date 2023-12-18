"use server"
import db from "../../prisma/db";
import { unstable_noStore as noStore } from 'next/cache';

export default async function fetchLastWeek() {
  noStore();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const users = await db.user.findMany({
    where: {
      dateCreated: {
        gte: oneWeekAgo
      }
    }
  })
  return users
}
