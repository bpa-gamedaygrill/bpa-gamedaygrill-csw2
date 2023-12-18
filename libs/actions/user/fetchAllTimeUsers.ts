"use server"
import db from "../../prisma/db";
import { unstable_noStore as noStore } from 'next/cache';

export default async function fetchAllUsers() {
  noStore();
  const users = await db.user.findMany()
  return users
}
