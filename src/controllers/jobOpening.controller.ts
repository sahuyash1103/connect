import { NextFunction, Request, Response } from 'express';
import { sendResponse, validate } from '../utils/helper';
import { body } from 'express-validator';
import { HTTP_STATUS } from '../utils/constants';
import JobOpeningService from '../services/jobOpening.service';

const jobOpeningService = new JobOpeningService();

export const get = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const data = await jobOpeningService.getAll(page, limit);
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
      const data = await jobOpeningService.getById(id);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const create = [
  validate([
    body('title').notEmpty().isString(),
    body('company').notEmpty().isString(),
    body('location').notEmpty().isString(),
    body('description').notEmpty().isString(),
    body('requirements').notEmpty().isArray(),
    body('salary').optional().isObject(),
    body('employmentType').notEmpty().isString(),
    body('experienceLevel').notEmpty().isString(),
    body('deadline').optional().isISO8601().toDate(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await jobOpeningService.create(req.body);
      sendResponse(res, HTTP_STATUS.CREATED, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const update = [
  validate([
    body('title').optional().isString(),
    body('company').optional().isString(),
    body('location').optional().isString(),
    body('description').optional().isString(),
    body('requirements').optional().isArray(),
    body('salary').optional().isObject(),
    body('employmentType').optional().isString(),
    body('experienceLevel').optional().isString(),
    body('deadline').optional().isISO8601().toDate(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const data = await jobOpeningService.updateById(id, req.body);
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
      const data = await jobOpeningService.removeById(id);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
]; 