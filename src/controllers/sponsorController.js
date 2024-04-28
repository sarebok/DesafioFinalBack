import { createSponsor, getAllSponsors } from "../models/sponsorModel.js";

const registerSponsor = async (req, res) => {
  try {
    const sponsor = await createSponsor(req.body);
    res.status(201).json({ message: 'Sponsor created successfully', sponsor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const showSponsors = async (req, res) => {
  try {
    const sponsors = await getAllSponsors();
    if (!sponsors) {
      return res.status(404).json({ error: 'No sponsors found' });
    }

    // Return an array of sponsor objects
    res.json(sponsors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { registerSponsor, showSponsors };