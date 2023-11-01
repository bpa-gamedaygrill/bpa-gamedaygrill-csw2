import { generateNewCin } from "./cin"
export async function cartMiddleware() {
  console.log("HELLO MANS")
  const newCin = await generateNewCin();
  console.log(`FROM MIDDLEWARE ${newCin}`)
  return newCin;
}
