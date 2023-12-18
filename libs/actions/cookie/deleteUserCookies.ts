"use server"
import { unstable_noStore as noStore } from 'next/cache';
import { cookies } from "next/headers"

export default async function deleteUserCookies() {
  noStore();
  cookies().delete('__obj1')
  cookies().delete('__obj2')
  cookies().delete('token')
  return true
}
