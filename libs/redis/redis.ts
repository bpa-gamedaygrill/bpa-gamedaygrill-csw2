import { Redis } from "ioredis";

declare global {
  var redis: Redis | undefined
}

function generateRedis() {
  if (!process.env.REDIS_URL) {
    throw new Error("REDIS_URL is not defined!");
  }
  return new Redis(process.env.REDIS_URL);
}

const client = globalThis.redis || generateRedis()
if (process.env.NODE_ENV !== "production") globalThis.redis = client

export default client;
