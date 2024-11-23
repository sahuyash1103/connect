import { NextFunction, Request, Response } from 'express';
import { sendResponse, validate } from '../utils/helper';
import { body } from 'express-validator';
import { HTTP_STATUS } from '../utils/constants';
import HealthInformationService from '../services/healthInformation.service';

const healthInformationService = new HealthInformationService();

export const get = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const data = await healthInformationService.getAll(page, limit);
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
      const data = await healthInformationService.getById(id);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const create = [
  validate([
    body('bloodGroup').notEmpty().isString(),
    body('allergies').optional().isArray(),
    body('medicalConditions').optional().isArray(),
    body('medications').optional().isArray(),
    body('insuranceProvider').optional().isString(),
    body('insuranceNumber').optional().isString(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await healthInformationService.create(req.body);
      sendResponse(res, HTTP_STATUS.CREATED, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const update = [
  validate([
    body('bloodGroup').optional().isString(),
    body('allergies').optional().isArray(),
    body('medicalConditions').optional().isArray(),
    body('medications').optional().isArray(),
    body('insuranceProvider').optional().isString(),
    body('insuranceNumber').optional().isString(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const data = await healthInformationService.updateById(id, req.body);
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
      const data = await healthInformationService.removeById(id);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
]; 