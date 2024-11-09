import { Router } from 'express';
import authRouter from './auth.route';
import educationRouter from './education.route'

const router = Router();

router.use('/auth', authRouter);
router.use('/education', educationRouter)
export default router;
