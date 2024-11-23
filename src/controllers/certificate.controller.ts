import { NextFunction, Request, Response } from 'express';
import { sendResponse, validate } from '../utils/helper';
import { body } from 'express-validator';
import { HTTP_STATUS } from '../utils/constants';
import CertificateService from '../services/certificate.service';
import { ICertificate } from '../types/certificate.types';

const certificateService = new CertificateService();

export const get = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const data = await certificateService.getAll(page, limit);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const getById = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const certificateId = req.params.id;
      const data = await certificateService.getById(certificateId);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const create = [
  validate([
    body('name').notEmpty().isString().withMessage('Name is required'),
    body('issuingOrganization').notEmpty().isString(),
    body('issueDate').notEmpty().isISO8601().toDate(),
    body('expiryDate').optional().isISO8601().toDate(),
    body('credentialId').optional().isString(),
    body('credentialUrl').optional().isURL(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await certificateService.create(req.body);
      sendResponse(res, HTTP_STATUS.CREATED, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const update = [
  validate([
    body('name').optional().isString(),
    body('issuingOrganization').optional().isString(),
    body('issueDate').optional().isISO8601().toDate(),
    body('expiryDate').optional().isISO8601().toDate(),
    body('credentialId').optional().isString(),
    body('credentialUrl').optional().isURL(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const certificateId = req.params.id;
      const data = await certificateService.updateById(certificateId, req.body);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
];

export const remove = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const certificateId = req.params.id;
      const data = await certificateService.removeById(certificateId);
      sendResponse(res, HTTP_STATUS.OK, { data });
    } catch (error) {
      next(error);
    }
  },
]; 