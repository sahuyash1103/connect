import { NextFunction, Request, Response } from 'express';
import { sendResponse, validate } from '../utils/helper';
import { body } from 'express-validator';
import { HTTP_STATUS } from '../utils/constants';
import StudentService from '../services/student.service';

const studentService = new StudentService();

export const get = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const data = await studentService.getAll(page, limit);
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
      const data = await studentService.getById(id);
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
    body('enrollmentNumber').notEmpty().isString(),
    body('course').notEmpty().isString(),
    body('batch').notEmpty().isString(),
    body('semester').notEmpty().isNumeric(),
    body('department').notEmpty().isString(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await studentService.create(req.body);
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
    body('enrollmentNumber').optional().isString(),
    body('course').optional().isString(),
    body('batch').optional().isString(),
    body('semester').optional().isNumeric(),
    body('department').optional().isString(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const data = await studentService.updateById(id, req.body);
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
      const data = await studentService.removeById(id);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
]; 