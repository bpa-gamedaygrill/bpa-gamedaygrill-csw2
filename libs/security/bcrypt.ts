import bcrypt from "bcrypt";

export async function Hash(
  string: string, 
  hashRounds: number = 8
): Promise<string> {
  const hashedString = await bcrypt.hash(string as string, hashRounds as number);
  return hashedString as string;
}

export async function Compare(
  plainText: string, 
  hashedText: string
): Promise<boolean> {
  const match = await bcrypt.compare(plainText as string, hashedText as string);
  return match as boolean;
}
