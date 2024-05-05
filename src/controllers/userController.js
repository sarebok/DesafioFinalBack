// userController.js
import { createUser, byEmail } from '../models/userModel.js';

export const postUser = async (req, res) => {
  try {
    const existingUser = await byEmail(req.body);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserByEmail = async (req, res) => {
  try {
    const user = await byEmail(req.params);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};