import { NextFunction, Request, Response } from 'express';
import { sendResponse, validate } from '../utils/helper';
import { body } from 'express-validator';
import { HTTP_STATUS } from '../utils/constants';
import SkillService from '../services/skill.service';

const skillService = new SkillService();

export const get = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const data = await skillService.getAll(page, limit);
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
      const data = await skillService.getById(id);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const create = [
  validate([
    body('name').notEmpty().isString(),
    body('category').notEmpty().isString(),
    body('proficiencyLevel').notEmpty().isString(),
    body('yearsOfExperience').optional().isNumeric(),
    body('certifications').optional().isArray(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await skillService.create(req.body);
      sendResponse(res, HTTP_STATUS.CREATED, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const update = [
  validate([
    body('name').optional().isString(),
    body('category').optional().isString(),
    body('proficiencyLevel').optional().isString(),
    body('yearsOfExperience').optional().isNumeric(),
    body('certifications').optional().isArray(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const data = await skillService.updateById(id, req.body);
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
      const data = await skillService.removeById(id);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
]; 