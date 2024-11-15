import { NextFunction, Request, Response } from 'express';
import { sendResponse, validate } from '../utils/helper';
import { body } from 'express-validator';
import UserService from '../services/user.service';
import { HTTP_STATUS } from '../utils/constants';
import AuthService from '../services/auth.service';
import { IUser } from '../types/user.types';

const userService = new UserService();
const authService = new AuthService();

export const login = [
  validate([
    body('userName')
      .notEmpty()
      .withMessage('userName is required.')
      .isString()
      .withMessage('userName should be a string'),
    body('password')
      .notEmpty()
      .withMessage('password is required.')
      .isString()
      .withMessage('password should be a string'),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userName, password } = req.body;

      const user = await userService.findByUserNameWithPassword(userName);

      if (!user) {
        return sendResponse(res, HTTP_STATUS.NOT_FOUND, {
          error: 'Invalid Credentials.',
        });
      }

      const isMatch = await authService.comparePassword(
        user.password!,
        password
      );

      if (!isMatch) {
        return sendResponse(res, HTTP_STATUS.UNAUTHORIZED, {
          error: 'Invalid Credentials.',
        });
      }

      const tokens = await authService.generateTokens(user);

      return sendResponse(res, HTTP_STATUS.OK, {
        message: 'successfully Logged in',
        data: {
          user,
          tokens,
        },
      });
    } catch (error) {
      next(error);
    }
  },
];

export const register = [
  validate([
    body('firstName'),
    body('middleName'),
    body('lastName'),
    body('userName'),
    body('phoneNumber'),
    body('email'),
    body('password'),
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        firstName,
        middleName,
        lastName,
        userName,
        phoneNumber,
        email,
        password,
      } = req.body;

      const user = await userService.findByUserName(userName);

      if (user) {
        return sendResponse(res, HTTP_STATUS.BAD_GATEWAY, {
          message: 'userName is already taken.',
        });
      }

      const newUserData: IUser = {
        firstName,
        middleName,
        lastName,
        userName,
        phoneNumber,
        email,
      };

      newUserData.password = await authService.hashPassword(password);

      const newUser = await userService.createUser(newUserData);

      const tokens = await authService.generateTokens(newUser);

      return sendResponse(res, HTTP_STATUS.OK, {
        message: 'successfully Logged in',
        data: {
          user: newUser,
          tokens,
        },
      });
    } catch (error) {
      next(error);
    }
  },
];
