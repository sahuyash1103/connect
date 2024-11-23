import { NextFunction, Request, Response } from 'express';
import { sendResponse, validate } from '../utils/helper';
import { body } from 'express-validator';
import { HTTP_STATUS } from '../utils/constants';
import ExperienceService from '../services/experience.service';

const experienceService = new ExperienceService();

export const get = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const data = await experienceService.getAll(page, limit);
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
      const data = await experienceService.getById(id);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const create = [
  validate([
    body('companyName').notEmpty().isString(),
    body('position').notEmpty().isString(),
    body('startDate').notEmpty().isISO8601().toDate(),
    body('endDate').optional().isISO8601().toDate(),
    body('description').optional().isString(),
    body('responsibilities').optional().isArray(),
    body('location').optional().isString(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await experienceService.create(req.body);
      sendResponse(res, HTTP_STATUS.CREATED, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const update = [
  validate([
    body('companyName').optional().isString(),
    body('position').optional().isString(),
    body('startDate').optional().isISO8601().toDate(),
    body('endDate').optional().isISO8601().toDate(),
    body('description').optional().isString(),
    body('responsibilities').optional().isArray(),
    body('location').optional().isString(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const data = await experienceService.updateById(id, req.body);
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
      const data = await experienceService.removeById(id);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
]; 