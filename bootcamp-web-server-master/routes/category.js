import express from 'express';

import asyncMiddleware from '../middlewares/asyncMiddleware';
import {getCategoryById} from '../controllers/categoryController';

const router = express.Router();

router.get('/:categoryId', asyncMiddleware(getCategoryById));

export default router;
