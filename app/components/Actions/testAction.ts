'use server';
import { cookies } from "next/headers";

export async function myAction() {
  console.log("hello from my action");
  console.log(cookies().getAll());
  cookies().set('testCookie', 'ooga')
}
