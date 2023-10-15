import db from "../../prisma/db";

export interface UserExistReturnObject {
  userExists ?: boolean;
  userData ?: {
    email: string;
    fullName: string;
    hashedPassword: string;
  }
  statusCode: 0 | 1;
}

export async function UserExists(
  email: string
): Promise<UserExistReturnObject> {
  try {
    const usersQuery = await db.user.findFirst({
      where: {
        email: email
      }
    })
    if (!usersQuery) {
      return { userExists: false, statusCode : 0 };
    } 
    return { userExists: true, statusCode : 0, userData: usersQuery };
  } catch(error) {
    console.log("[USER_EXISTS_UTIL]", error)
    return { statusCode: 1 }
  }
}
