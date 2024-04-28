import express from 'express';
import { registerProject, showProjects } from "../src/controllers/projectController.js";

const projectRouter = express.Router();

projectRouter.post('/', registerProject);
projectRouter.get('/', showProjects);

export default projectRouter;