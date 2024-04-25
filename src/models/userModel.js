import pool from "../../db/db.js";
import bcrypt from "bcryptjs";

const createUser = async ({ email, password, role, name, contact_info }) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
  
    const SQLquery = {
      text: "INSERT INTO users (email, password, role, name, contact_info) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      values: [email, hashedPassword, role, name, contact_info],
    };
  
    const response = await pool.query(SQLquery);
    return response.rows[0];
};

const byEmail = async ({email}) => {
  const SQLquery = {
    text: "SELECT * FROM users WHERE email = $1",
    values: [email],
  };
  const response = await pool.query(SQLquery);

  return response.rows[0];
};

export { createUser, byEmail };