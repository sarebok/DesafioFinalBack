import { byEmail, createUser } from "../models/userModel.js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { findError } from "../utils/utils.js";

dotenv.config()

const loginUser = async (req, res) => {
  const user = req.body;
  
  try {
    const findUser = await byEmail(user);
    
    if (!findUser) {
      const errorFound = findError("auth_01");
      return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
    } else {
      const isPasswordValid = bcrypt.compareSync(
        user.password,
        findUser.password
      );
      if (!isPasswordValid) {
        const errorFound = findError("auth_02");
        return res
        .status(errorFound[0].status)
        .json({ error: errorFound[0].message });
      } else {
        const { email, role, name, contact_info } = findUser;
        const token = jwt.sign({ email: findUser.email }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        res.status(200).json({
          message: `Welcome, ${name}`,
          role,
          contact_info,
          code: 200,
          token,
        });
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const registerUser = async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const showUser = async (req, res) => {
  try {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
      return res.status(403).json({ error: 'No token provided' });
    }

    const token = bearerToken.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: 'Failed to authenticate token' });
      }

      const email = decoded.email;
      const user = await byEmail({ email });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Return an array of user objects
      res.json([{
        email: user.email,
        role: user.role,
        name: user.name,
        contact_info: user.contact_info,
      }]);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { loginUser, registerUser, showUser };