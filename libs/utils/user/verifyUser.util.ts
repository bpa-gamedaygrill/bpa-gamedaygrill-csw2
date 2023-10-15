import { Compare } from '../../security/bcrypt';
import { UserExists, UserExistReturnObject } from './userExists.util';

export interface VerifyUserReturnObject {
  userVerified?: boolean;
  errorInfo?: string;
  statusCode: 0 | 1;
  errorCode?: number;
  userData?: any;
}

export async function VerifyUserWithCredentials(
  email: string,
  password: string
): Promise<VerifyUserReturnObject> {
  try {
    const verifyUserExists: UserExistReturnObject = await UserExists(email as string);
    if (verifyUserExists.statusCode === 1) {
      return { statusCode: 1, errorInfo: "Internal Server Error: [USER_EXISTS_UTIL] Failed", errorCode: 500 }
    }
    if (!verifyUserExists.userExists) {
      return { statusCode: 1, errorInfo: "Email not registered", errorCode: 401 }
    }
    const hashedPassword = verifyUserExists.userData?.hashedPassword;
    const doesPasswordMatch: boolean = await Compare(password as string, hashedPassword as string); 
    if (!doesPasswordMatch) {
      return { statusCode: 1, errorInfo: "Invalid Credentials", errorCode: 403 }
    }
    return { userVerified: true, statusCode: 0, userData: verifyUserExists.userData }
  } catch(e) {
    console.log('[VERIFYUSER_CREDENTIALS_UTIL]', e);
    return { statusCode: 1, errorInfo: e as string, errorCode: 500 }
  }
}

// export async function VerifyUserWithToken(
//   token: string
// ): Promise<VerifyUserReturnObject> {
//   try {
//     
//   } catch(e) {
//     console.log('[VERIFYUSER_TOKEN_UTIL]', e)
//     return { statusCode: 1, errorInfo: e as string, errorCode: 500 }
//   }
// }
