import { Router } from 'express';
import { get, getById, update, remove, create } from '../controllers/socialProfile.controller';

const router = Router();

router.route('/').get(get).post(create);
router.route('/:id').put(update).delete(remove).get(getById);

export default router; 