"use server"
import db from "../../prisma/db";
import { unstable_noStore as noStore } from 'next/cache';

export default async function fetchAllTimeOrders() {
  noStore();
  const orders = await db.order.findMany()
  return orders;
}
