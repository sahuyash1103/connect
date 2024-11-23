import { NextFunction, Request, Response } from 'express';
import { sendResponse, validate } from '../utils/helper';
import { body } from 'express-validator';
import { HTTP_STATUS } from '../utils/constants';
import EmergencyContactService from '../services/emergencyContact.service';
import { IEmergencyContact } from '../types/emergencyContact.types';

const emergencyContactService = new EmergencyContactService();

export const get = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const data = await emergencyContactService.getAll(page, limit);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const getById = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const contactId = req.params.id;
      const data = await emergencyContactService.getById(contactId);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const create = [
  validate([
    body('name').notEmpty().isString(),
    body('relationship').notEmpty().isString(),
    body('primaryPhone').notEmpty().isString(),
    body('secondaryPhone').optional().isString(),
    body('email').optional().isEmail(),
    body('address').optional().isString(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await emergencyContactService.create(req.body);
      sendResponse(res, HTTP_STATUS.CREATED, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const update = [
  validate([
    body('name').optional().isString(),
    body('relationship').optional().isString(),
    body('primaryPhone').optional().isString(),
    body('secondaryPhone').optional().isString(),
    body('email').optional().isEmail(),
    body('address').optional().isString(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const contactId = req.params.id;
      const data = await emergencyContactService.updateById(contactId, req.body);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const remove = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const contactId = req.params.id;
      const data = await emergencyContactService.removeById(contactId);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
]; 