import { NextFunction, Request, Response } from 'express';
import { sendResponse, validate } from '../utils/helper';
import { body } from 'express-validator';
import { HTTP_STATUS } from '../utils/constants';
import RecruiterService from '../services/recruiter.service';

const recruiterService = new RecruiterService();

export const get = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const data = await recruiterService.getAll(page, limit);
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
      const data = await recruiterService.getById(id);
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
    body('email').notEmpty().isEmail(),
    body('company').notEmpty().isString(),
    body('position').notEmpty().isString(),
    body('phoneNumber').notEmpty().isString(),
    body('linkedIn').optional().isURL(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await recruiterService.create(req.body);
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
    body('email').optional().isEmail(),
    body('company').optional().isString(),
    body('position').optional().isString(),
    body('phoneNumber').optional().isString(),
    body('linkedIn').optional().isURL(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const data = await recruiterService.updateById(id, req.body);
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
      const data = await recruiterService.removeById(id);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
]; 