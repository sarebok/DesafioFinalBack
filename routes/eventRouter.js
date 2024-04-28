import express from 'express';
import { registerEvent, showEvents } from "../src/controllers/eventController.js";

const eventRouter = express.Router();

eventRouter.post('/', registerEvent);
eventRouter.get('/', showEvents);

export default eventRouter;