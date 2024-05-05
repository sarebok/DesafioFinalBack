import pool from "../../db/db.js";

const createEvent = async (eventData) => {
  const { name, date, location, project_id } = eventData;
  const result = await pool.query(
    "INSERT INTO events (name, date, location, project_id) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, date, location, project_id]
  );
  return result.rows[0];
};

const getAllEvents = async () => {
  const result = await pool.query("SELECT * FROM events");
  return result.rows;
};

export { createEvent, getAllEvents };