import { NextFunction, Request, Response } from 'express';
import { sendResponse, validate } from '../utils/helper';
import { body } from 'express-validator';
import { HTTP_STATUS } from '../utils/constants';
import CompanyService from '../services/company.service';
import { ICompany } from '../types/company.types';

const companyService = new CompanyService();

export const get = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const data = await companyService.getAll(page, limit);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const getById = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const companyId = req.params.id;
      const data = await companyService.getById(companyId);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const create = [
  validate([
    body('name').notEmpty().isString().withMessage('Company name is required'),
    body('industry').notEmpty().isString(),
    body('location').notEmpty().isString(),
    body('description').optional().isString(),
    body('website').optional().isURL(),
    body('employeeCount').optional().isInt(),
    body('foundedYear').optional().isInt(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await companyService.create(req.body);
      sendResponse(res, HTTP_STATUS.CREATED, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const update = [
  validate([
    body('name').optional().isString(),
    body('industry').optional().isString(),
    body('location').optional().isString(),
    body('description').optional().isString(),
    body('website').optional().isURL(),
    body('employeeCount').optional().isInt(),
    body('foundedYear').optional().isInt(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const companyId = req.params.id;
      const data = await companyService.updateById(companyId, req.body);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const remove = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const companyId = req.params.id;
      const data = await companyService.removeById(companyId);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
]; 