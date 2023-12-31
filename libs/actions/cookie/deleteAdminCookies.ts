"use server"
import { unstable_noStore as noStore } from 'next/cache';
import { cookies } from "next/headers"

export default async function deleteAdminCookies() {
  noStore();
  cookies().delete('ownerverified')
  return true
}

