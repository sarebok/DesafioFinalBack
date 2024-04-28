import { createEvent, getAllEvents } from "../models/eventModel.js";

const registerEvent = async (req, res) => {
  try {
    const event = await createEvent(req.body);
    res.status(201).json({ message: 'Event created successfully', event });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const showEvents = async (req, res) => {
  try {
    const events = await getAllEvents();
    if (!events) {
      return res.status(404).json({ error: 'No events found' });
    }

    // Return an array of event objects
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { registerEvent, showEvents };