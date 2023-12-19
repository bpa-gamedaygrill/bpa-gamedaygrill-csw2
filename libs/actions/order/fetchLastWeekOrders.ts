"use server"
import db from "../../prisma/db";
import { unstable_noStore as noStore } from 'next/cache';

export default async function fetchLastWeekOrders() {
  noStore();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const orders = await db.order.findMany({
    where: {
      purchaseDate: {
        gte: oneWeekAgo
      }
    }
  })
  return orders
}
