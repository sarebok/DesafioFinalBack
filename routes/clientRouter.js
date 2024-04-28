import express from 'express';
import { registerClient, showClients } from "../src/controllers/clientController.js";
import validateToken from '../middlewares/validateToken.js';

const clientRouter = express.Router();

clientRouter.post('/', validateToken, registerClient);
clientRouter.get('/', validateToken, showClients);

export default clientRouter;








