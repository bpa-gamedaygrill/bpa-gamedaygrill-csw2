import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export interface NewJwtReturnObject {
  token ?: string;
  statusCode: 0 | 1;
}

export interface VerifyJwtReturnObject {
  isValid?: boolean;
  statusCode: 0 | 1;
}

export function newJwt(
  payload: any
): NewJwtReturnObject {
  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET as string);
    return { token: token, statusCode: 0 }
  } catch(e) {
    console.log('[JWT_UTILS_ERROR]', e);
    return { statusCode: 1 }
  }
}

export function verifyJwt(
  token: string
): VerifyJwtReturnObject {
  try {
    const verify = jwt.verify(token, process.env.JWT_SECRET as string);
    if (verify) {
      return { isValid: true, statusCode: 0 }
    }
    return { isValid: false, statusCode: 0 }
  } catch(e) {
    console.log('[JWT_UTILS_ERROR]', e);
    return { statusCode: 1 }
  }
}
