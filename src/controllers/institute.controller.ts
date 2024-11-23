import { NextFunction, Request, Response } from 'express';
import { sendResponse, validate } from '../utils/helper';
import { body } from 'express-validator';
import { HTTP_STATUS } from '../utils/constants';
import InstituteService from '../services/institute.service';

const instituteService = new InstituteService();

export const get = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const data = await instituteService.getAll(page, limit);
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
      const data = await instituteService.getById(id);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const create = [
  validate([
    body('name').notEmpty().isString(),
    body('type').notEmpty().isString(),
    body('location').notEmpty().isString(),
    body('accreditation').optional().isString(),
    body('establishedYear').optional().isInt(),
    body('website').optional().isURL(),
    body('contactInfo').optional().isObject(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await instituteService.create(req.body);
      sendResponse(res, HTTP_STATUS.CREATED, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const update = [
  validate([
    body('name').optional().isString(),
    body('type').optional().isString(),
    body('location').optional().isString(),
    body('accreditation').optional().isString(),
    body('establishedYear').optional().isInt(),
    body('website').optional().isURL(),
    body('contactInfo').optional().isObject(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const data = await instituteService.updateById(id, req.body);
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
      const data = await instituteService.removeById(id);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
]; 