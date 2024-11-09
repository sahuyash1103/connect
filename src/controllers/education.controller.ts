import { NextFunction, Request, Response } from 'express';
import { sendResponse, validate } from '../utils/helper';
import { body } from 'express-validator';

import { HTTP_STATUS } from '@/utils/constants';
import EducatoionService from '@/services/education.service';
import { IEducation } from '@/types/education.types';

const educatoionService = new EducatoionService();

export const get = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const data = await educatoionService.getAll(page, limit);
      sendResponse(res, HTTP_STATUS.OK, {
        data,
      });
    } catch (error) {
      next(error);
    }
  },
];

export const getById = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const educationId = req.params.id;
      const data = await educatoionService.getById(educationId);
      sendResponse(res, HTTP_STATUS.OK, {
        data,
      });
    } catch (error) {
      next(error);
    }
  },
];

export const create = [
  validate([
    body('establishments')
      .notEmpty()
      .isString()
      .isIn(['COLLEGE', 'DIPLOMA', 'SCHOOL']),
    body('instituteName')
      .notEmpty()
      .isString()
      .withMessage('Institute name is required!'),
    body('discipline').notEmpty().isString(),
    body('affiliatedTo').notEmpty().isString(),
    body('addressOfInstitute').notEmpty().isString(),
    body('startingYear').notEmpty().isString(),
    body('passingYear').notEmpty().isString(),
    body('level')
      .notEmpty()
      .isString()
      .isIn(['PHD', 'UG', 'PG', '12TH', '10TH']),
    body('grade').notEmpty().isString(),
    body('stream').notEmpty().isString(),
    body('majorField').notEmpty().isString(),
    body('optionalSubject').notEmpty().isString(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        establishments,
        instituteName,
        discipline,
        affiliatedTo,
        addressOfInstitute,
        startingYear,
        passingYear,
        level,
        grade,
        stream,
        majorField,
        optionalSubject,
      } = req.body;
      const educationObj: IEducation = {
        establishments,
        instituteName,
        discipline,
        affiliatedTo,
        addressOfInstitute,
        startingYear,
        passingYear,
        level,
        grade,
        stream,
        majorField,
        optionalSubject,
      };
      const data = await educatoionService.create(educationObj);
      sendResponse(res, HTTP_STATUS.OK, {
        data,
      });
    } catch (error) {
      next(error);
    }
  },
];

export const update = [
    validate([
      body('establishments')
        .optional()
        .isString()
        .isIn(['COLLEGE', 'DIPLOMA', 'SCHOOL']),
      body('instituteName')
        .optional()
        .isString()
        .withMessage('Institute name is required!'),
      body('discipline').optional().isString(),
      body('affiliatedTo').optional().isString(),
      body('addressOfInstitute').optional().isString(),
      body('startingYear').optional().isString(),
      body('passingYear').optional().isString(),
      body('level')
        .optional()
        .isString()
        .isIn(['PHD', 'UG', 'PG', '12TH', '10TH']),
      body('grade').optional().isString(),
      body('stream').optional().isString(),
      body('majorField').optional().isString(),
      body('optionalSubject').optional().isString(),
    ]),
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const educationId = req.params.id;
        const {
          establishments,
          instituteName,
          discipline,
          affiliatedTo,
          addressOfInstitute,
          startingYear,
          passingYear,
          level,
          grade,
          stream,
          majorField,
          optionalSubject,
        } = req.body;
        const educationObj: IEducation = {
          establishments,
          instituteName,
          discipline,
          affiliatedTo,
          addressOfInstitute,
          startingYear,
          passingYear,
          level,
          grade,
          stream,
          majorField,
          optionalSubject,
        };
        const data = await educatoionService.updateById(educationId, educationObj);
        sendResponse(res, HTTP_STATUS.OK, {
          data,
        });
      } catch (error) {
        next(error);
      }
    },
  ];
  

export const remove = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const educationId = req.params.id;
      const data = await educatoionService.removeById(educationId);
      sendResponse(res, HTTP_STATUS.OK, {
        data,
      });
    } catch (error) {
      next(error);
    }
  },
];
