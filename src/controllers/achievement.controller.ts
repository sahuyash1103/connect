import { NextFunction, Request, Response } from 'express';
import { sendResponse, validate } from '../utils/helper';
import { body } from 'express-validator';
import { HTTP_STATUS } from '../utils/constants';
import AchievementService from '../services/achievement.service';
import { IAchievement } from '../types/achievement.types';

const achievementService = new AchievementService();

export const get = [
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const data = await achievementService.getAll(page, limit);
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
      const achievementId = req.params.id;
      const data = await achievementService.getById(achievementId);
      sendResponse(res, HTTP_STATUS.OK, {
        data,
      });
    } catch (error) {
      next(error);
    }
  },
];

export const create = [
  validate([]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const achievementObj: IAchievement = {};
      const data = await achievementService.create(achievementObj);
      sendResponse(res, HTTP_STATUS.CREATED, {
        data,
      });
    } catch (error) {
      next(error);
    }
  },
];

export const update = [
  validate([
    body('title').optional().isString(),
    body('description').optional().isString(),
    body('date').optional().isISO8601().toDate(),
    body('issuer').optional().isString(),
    body('url').optional().isURL(),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const achievementId = req.params.id;
      const achievementObj: Partial<IAchievement> = {
        ...(req.body.title && { title: req.body.title }),
        ...(req.body.description && { description: req.body.description }),
        ...(req.body.date && { date: req.body.date }),
        ...(req.body.issuer && { issuer: req.body.issuer }),
        ...(req.body.url && { url: req.body.url }),
      };
      const data = await achievementService.updateById(
        achievementId,
        achievementObj
      );
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
      const achievementId = req.params.id;
      const data = await achievementService.removeById(achievementId);
      sendResponse(res, HTTP_STATUS.OK, {
        data,
      });
    } catch (error) {
      next(error);
    }
  },
];
