import express from 'express';
import {
  validationResult,
  ContextRunner,
  ValidationError,
} from 'express-validator';
import { ICustomResponse } from '../types/custom-response.types';
import { HTTP_STATUS } from './constants';

export const sendResponse = <T>(
  res: express.Response,
  code: number,
  {
    message,
    error,
    data,
    success,
  }: {
    message?: string | null;
    error?: T | null;
    data?: T | null;
    success?: boolean;
  }
) => {
  const response: ICustomResponse<T> = {
    success: success || (code >= 200 && code < 300),
    message: message,
    error: error,
    data: data,
  };
  res.status(code).json(response);
};

export const validate = (validations: ContextRunner[]) => {
  return async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    for (const validation of validations) {
      await validation.run(req);
    }

    const result = validationResult(req);
    if (!result.isEmpty()) {
      return sendResponse<ValidationError[]>(res, HTTP_STATUS.BAD_REQUEST, {
        message: 'Invalid Request.',
        error: result.array(),
      });
    }

    return next();
  };
};
