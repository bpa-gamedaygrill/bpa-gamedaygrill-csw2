import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {
  console.log("Helo")
  return new NextResponse("Hllo")
}
