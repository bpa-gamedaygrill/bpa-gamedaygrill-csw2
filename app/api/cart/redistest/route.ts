import { NextResponse } from "next/server";
import { redis } from "../../../../libs/redis/redis";

export async function POST(
  req: Request
) {
  try {
    await redis.set("hello", "world");
    await redis.set("hello", "world2")
    return new NextResponse("Success! New redis key value created.")
  } catch(error) {
    return new NextResponse("Internal server error", { status: 500 })
  }
}
