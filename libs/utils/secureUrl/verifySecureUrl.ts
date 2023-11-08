import { Compare } from "../../security/bcrypt";

export async function verifySecureUrl(
  hash: string,
  url: string
): Promise<boolean> {
  console.log(hash, url)
  const doesSecureUrlMatch: boolean = await Compare(url as string, hash as string); 
  return doesSecureUrlMatch;
}
