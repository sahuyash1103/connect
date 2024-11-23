import { NextFunction, Request, Response } from 'express';
import { sendResponse, validate } from '../utils/helper';
import { body } from 'express-validator';
import { HTTP_STATUS } from '../utils/constants';
import EducatorService from '../services/educator.service';
import { IEducator } from '../types/educator.types';

const educatorService = new EducatorService();

export const get = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const data = await educatorService.getAll(page, limit);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const getById = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const educatorId = req.params.id;
      const data = await educatorService.getById(educatorId);
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
    body('email').isEmail(),
    body('department').notEmpty().isString(),
    body('position').notEmpty().isString(),
    body('specialization').optional().isString(),
    body('qualifications').optional().isArray(),
    body('contactNumber').optional().isString(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await educatorService.create(req.body);
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
    body('department').optional().isString(),
    body('position').optional().isString(),
    body('specialization').optional().isString(),
    body('qualifications').optional().isArray(),
    body('contactNumber').optional().isString(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const educatorId = req.params.id;
      const data = await educatorService.updateById(educatorId, req.body);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const remove = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const educatorId = req.params.id;
      const data = await educatorService.removeById(educatorId);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
]; 