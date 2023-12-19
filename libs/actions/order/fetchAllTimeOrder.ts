"use server"
import db from "../../prisma/db";
import { unstable_noStore as noStore } from 'next/cache';

export default async function fetchAllOrders() {
  noStore();
  const orders = await db.order.findMany()
  return orders;
}
