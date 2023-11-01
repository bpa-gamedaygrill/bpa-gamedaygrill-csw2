import db from "../prisma/db";

export async function generateNewCin() {
  console.log("new cin")
  const newCin = await db.cart.create({
    data: {

    }
  });
  return newCin;
}
