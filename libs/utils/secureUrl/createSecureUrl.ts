import { Hash } from "../../security/bcrypt";
export async function createSecureUrl(
  url: string
) {
  const secureUrl: string = await Hash(url, 8);
  return secureUrl;
}
