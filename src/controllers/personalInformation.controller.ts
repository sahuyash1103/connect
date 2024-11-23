import { NextFunction, Request, Response } from 'express';
import { sendResponse, validate } from '../utils/helper';
import { body } from 'express-validator';
import { HTTP_STATUS } from '../utils/constants';
import PersonalInformationService from '../services/personalInformation.service';

const personalInformationService = new PersonalInformationService();

export const get = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const data = await personalInformationService.getAll(page, limit);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const getById = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const data = await personalInformationService.getById(id);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const create = [
  validate([
    body('firstName').notEmpty().isString(),
    body('lastName').notEmpty().isString(),
    body('dateOfBirth').notEmpty().isISO8601().toDate(),
    body('gender').notEmpty().isString(),
    body('nationality').notEmpty().isString(),
    body('address').notEmpty().isObject(),
    body('phoneNumber').notEmpty().isString(),
    body('email').notEmpty().isEmail(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await personalInformationService.create(req.body);
      sendResponse(res, HTTP_STATUS.CREATED, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const update = [
  validate([
    body('firstName').optional().isString(),
    body('lastName').optional().isString(),
    body('dateOfBirth').optional().isISO8601().toDate(),
    body('gender').optional().isString(),
    body('nationality').optional().isString(),
    body('address').optional().isObject(),
    body('phoneNumber').optional().isString(),
    body('email').optional().isEmail(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const data = await personalInformationService.updateById(id, req.body);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const remove = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const data = await personalInformationService.removeById(id);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
]; 