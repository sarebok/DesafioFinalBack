import pool from "../../db/db.js";

const createEvent = async (eventData) => {
  const { name, date, project_id } = eventData;
  const result = await pool.query(
    "INSERT INTO events (name, date, project_id) VALUES ($1, $2, $3) RETURNING *",
    [name, date, project_id]
  );
  return result.rows[0];
};

const getAllEvents = async () => {
  const result = await pool.query("SELECT * FROM events");
  return result.rows;
};

export { createEvent, getAllEvents };