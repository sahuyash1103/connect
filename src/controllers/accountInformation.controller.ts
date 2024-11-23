import { NextFunction, Request, Response } from 'express';
import { sendResponse, validate } from '../utils/helper';
import { body } from 'express-validator';
import { HTTP_STATUS } from '../utils/constants';
import AccountInformationService from '../services/accountInformation.service';
import { IAccountInformation } from '../types/accountInformation.types';

const accountInformationService = new AccountInformationService();

export const get = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const data = await accountInformationService.getAll(page, limit);
      sendResponse(res, HTTP_STATUS.OK, {
        data,
      });
    } catch (error) {
      next(error);
    }
  },
];

export const getById = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const accountId = req.params.id;
      const data = await accountInformationService.getById(accountId);
      sendResponse(res, HTTP_STATUS.OK, {
        data,
      });
    } catch (error) {
      next(error);
    }
  },
];

export const create = [
  validate([]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const accountObj: IAccountInformation = {};
      const data = await accountInformationService.create(accountObj);
      sendResponse(res, HTTP_STATUS.CREATED, {
        data,
      });
    } catch (error) {
      next(error);
    }
  },
];

export const update = [
  validate([
    body('email').optional().isEmail().withMessage('Valid email is required'),
    body('password').optional().isString(),
    body('username').optional().isString(),
    body('role').optional().isString(),
    body('isActive').optional().isBoolean(),
    body('lastLogin').optional().isISO8601().toDate(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const accountId = req.params.id;
      const accountObj: Partial<IAccountInformation> = {
        ...(req.body.email && { email: req.body.email }),
        ...(req.body.password && { password: req.body.password }),
        ...(req.body.username && { username: req.body.username }),
        ...(req.body.role && { role: req.body.role }),
        ...(typeof req.body.isActive !== 'undefined' && {
          isActive: req.body.isActive,
        }),
        ...(req.body.lastLogin && { lastLogin: req.body.lastLogin }),
      };
      const data = await accountInformationService.updateById(
        accountId,
        accountObj
      );
      sendResponse(res, HTTP_STATUS.OK, {
        data,
      });
    } catch (error) {
      next(error);
    }
  },
];

export const remove = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const accountId = req.params.id;
      const data = await accountInformationService.removeById(accountId);
      sendResponse(res, HTTP_STATUS.OK, {
        data,
      });
    } catch (error) {
      next(error);
    }
  },
];
