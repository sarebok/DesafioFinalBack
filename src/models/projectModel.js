import pool from "../../db/db.js";

const createProject = async (projectData) => {
  const { name, client_id } = projectData;
  const result = await pool.query(
    "INSERT INTO projects (name, client_id) VALUES ($1, $2) RETURNING *",
    [name, client_id]
  );
  return result.rows[0];
};

const getAllProjects = async () => {
  const result = await pool.query("SELECT * FROM projects");
  return result.rows;
};

export { createProject, getAllProjects };