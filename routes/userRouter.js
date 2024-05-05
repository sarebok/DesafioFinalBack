import express from 'express';
import { postUser, getUserByEmail } from '../controllers/userController.js';

const router = express.Router();

router.post('/users', postUser);
router.get('/users/:email', getUserByEmail);

export default router;