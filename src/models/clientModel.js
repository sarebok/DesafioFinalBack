import pool from "../../db/db.js";

const createClient = async ({ name, contact_info }) => {
    const SQLquery = {
        text: "INSERT INTO clients (name, contact_info) VALUES ($1, $2) RETURNING *",
        values: [name, contact_info],
    };

    const response = await pool.query(SQLquery);
    return response.rows[0];
};

const getAllClients = async () => {
    const SQLquery = {
        text: "SELECT * FROM clients",
    };

    const response = await pool.query(SQLquery);
    return response.rows;
};

export { createClient, getAllClients };