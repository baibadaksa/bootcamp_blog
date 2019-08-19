import express from 'express';

import asyncMiddleware from '../middlewares/asyncMiddleware';
import { getPostyById } from '../controllers/postController';

const router = express.Router();

router.get('/:postId', asyncMiddleware(getPostById));

export default router;
