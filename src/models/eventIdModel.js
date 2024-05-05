import pool from "../../db/db.js";

const getEventById = async (id) => {
  const SQLquery = {
    text: "SELECT * FROM events WHERE id = $1",
    values: [id],
  };

  const response = await pool.query(SQLquery);
  return response.rows[0];
};

export { getEventById };