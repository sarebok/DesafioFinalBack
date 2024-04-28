import express from 'express';
import { registerSponsor, showSponsors } from "../src/controllers/sponsorController.js";

const sponsorRouter = express.Router();

sponsorRouter.post('/', registerSponsor);
sponsorRouter.get('/', showSponsors);

export default sponsorRouter;