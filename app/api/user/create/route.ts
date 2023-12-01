import { NextResponse } from 'next/server';

// Lib imports 
import db from "../../../../libs/prisma/db";
import { Hash } from '../../../../libs/security/bcrypt';
import { UserExists, UserExistReturnObject } from '../../../../libs/utils/user/userExists.util';
import { NewJwtReturnObject, newJwt } from '../../../../libs/jwt';

export async function POST(
  req: Request
) {
  try {
    // Get body details
    const body = await req.json();
    const { fullName, email, password } = body;

    // Validate body
    if (!fullName) {
      return new NextResponse("Name is required", { status: 400 });
    }
    if (!email) {
      return new NextResponse("Email is required", { status: 400 });
    }
    if (!password) {
      return new NextResponse("Password is required", { status: 400 });
    }

    // Verify that email does not already exist 
    const verifyUserExists: UserExistReturnObject = await UserExists(email as string);

    if (verifyUserExists.statusCode === 1) {
      return new NextResponse("Internal Server Error: [USER_EXISTS_UTIL] Failed", { status: 500 })
    }
    if (verifyUserExists.userExists) {
      return new NextResponse("Email already registered", { status: 409 })
    }

    // Hash password
    const hashedPassword: string = await Hash(password, 8);

    const newUser: any = await db.user.create({
      data: {
        fullName,
        email,
        hashedPassword
      } 
    })

    const newReward = await db.reward.create({
      data: {
        discountPercentage: 15,
        userId: newUser.id
      }
    })

    // Generate a JSON Web Token
    const tokenData: NewJwtReturnObject = newJwt(newUser);

    if (tokenData.statusCode === 1) {
      return new NextResponse("Internal Server Error: [NEW_JWT_UTIL] Failed", { status: 500 });
    }

    newUser.token = tokenData.token;

    return NextResponse.json(newUser);
  } catch(error) {
    console.log('[CREATE_USER_POST]', error);
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}

