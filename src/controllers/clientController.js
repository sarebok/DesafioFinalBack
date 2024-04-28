import { createClient, getAllClients } from "../models/clientModel.js";

const registerClient = async (req, res) => {
  try {
    const client = await createClient(req.body);
    res.status(201).json({ message: 'Client created successfully', client });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const showClients = async (req, res) => {
  try {
    const clients = await getAllClients();
    if (!clients) {
      return res.status(404).json({ error: 'No clients found' });
    }

    // Return an array of client objects
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { registerClient, showClients };