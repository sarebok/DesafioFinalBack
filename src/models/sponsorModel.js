import pool from "../../db/db.js";

const createSponsor = async (sponsorData) => {
  const { name, project_id } = sponsorData;
  const result = await pool.query(
    "INSERT INTO sponsors (name) VALUES ($1) RETURNING *",
    [name]
  );
  return result.rows[0];
};

const getAllSponsors = async () => {
  const result = await pool.query("SELECT * FROM sponsors");
  return result.rows;
};

export { createSponsor, getAllSponsors };