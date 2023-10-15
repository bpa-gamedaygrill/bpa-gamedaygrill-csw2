import { NextResponse } from "next/server";

// Lib imports 
import { VerifyUserWithCredentials } from "../../../../libs/utils/user/verifyUser.util";
import { NewJwtReturnObject, newJwt } from '../../../../libs/jwt';

export async function POST(
  req: Request
) {
  try {
    const body = await req.json(); 
    const { email, password } = body;

    if (!email) {
      return new NextResponse("Email is required", { status: 400 });
    }
    if (!password) {
      return new NextResponse("Password is required", { status: 400 });
    }

    // Check if user exists
    const verifyUserWithCredentials = await VerifyUserWithCredentials(email, password)

    if (verifyUserWithCredentials.statusCode===1) {
      return new NextResponse(`${verifyUserWithCredentials.errorInfo}`, { status: verifyUserWithCredentials.errorCode })
    }

    const returnData: any = verifyUserWithCredentials.userData;
    
    const token: NewJwtReturnObject = newJwt(verifyUserWithCredentials.userData);

    if (token.statusCode === 1) {
      return new NextResponse("Internal Server Error: [NEW_JWT_UTIL] Failed", { status: 500 });
    }

    returnData.token = token.token;

    return NextResponse.json(returnData);


  } catch(error) {
    console.log('[LOGIN_USER_POST]', error);
    return new NextResponse("Internal Server Error", { status: 500 })
  }

}

