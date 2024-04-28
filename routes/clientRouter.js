import express from 'express';
import { registerClient, showClients } from "../src/controllers/clientController.js";

const clientRouter = express.Router();

clientRouter.post('/', registerClient);
clientRouter.get('/', showClients);

export default clientRouter;