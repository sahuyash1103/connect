import { NextFunction, Request, Response } from 'express';
import { sendResponse } from '../utils/helper';
import { HTTP_STATUS } from '../utils/constants';
import AuthService from '../services/auth.service';
import { ITokenData } from '../types/tokens.types';

declare global {
  namespace Express {
    interface Request {
      user?: ITokenData | null;
    }
  }
}

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.headers['x-auth-data'] as string;
  const iv = req.headers['x-auth-iv'] as string;

  if (!data || !iv) {
    return sendResponse(res, HTTP_STATUS.OK, {
      error: 'missing auth Data or IV',
      success: false,
    });
  }

  const authService = new AuthService();

  try {
    const tokenData = await authService.decryptToken({ data, iv });
    req.user = tokenData;
  } catch (error) {
    return sendResponse(res, HTTP_STATUS.UNAUTHORIZED, {
      error: 'invalid auth Token.',
      success: false,
    });
  }

  next();
}
