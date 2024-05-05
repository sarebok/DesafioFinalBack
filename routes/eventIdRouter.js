import express from 'express';
import { getEventDetails } from '../src/controllers/eventIdController.js';

const router = express.Router();

router.get('/:id', getEventDetails);

export default router;