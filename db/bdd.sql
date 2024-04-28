-- Crear la base de datos
CREATE DATABASE hospitalidad_db;

-- Conectar a la base de datos creada (este comando depende de tu entorno de trabajo)
\c hospitalidad_db;

-- Creación de tabla 'users'
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL CHECK (role IN ('admin', 'invitado')),
    name VARCHAR(255),
    contact_info TEXT
);

-- Creación de tabla 'clients'
CREATE TABLE clients (
    client_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contact_info TEXT
);

-- Creación de tabla 'projects'
CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    client_id INT REFERENCES clients(client_id) ON DELETE CASCADE
);

-- Creación de tabla 'events'
CREATE TABLE events (
    event_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    location TEXT NOT NULL,
    project_id INT REFERENCES projects(project_id) ON DELETE CASCADE
);

-- Creación de tabla 'sponsors'
CREATE TABLE sponsors (
    sponsor_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contact_info TEXT
);

-- Creación de tabla 'project_sponsors' para manejar la relación muchos a muchos
CREATE TABLE project_sponsors (
    project_id INT REFERENCES projects(project_id) ON DELETE CASCADE,
    sponsor_id INT REFERENCES sponsors(sponsor_id) ON DELETE CASCADE,
    PRIMARY KEY (project_id, sponsor_id)
);

-- Creación de tabla 'tickets'
CREATE TABLE tickets (
    ticket_id SERIAL PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL,
    event_id INT REFERENCES events(event_id) ON DELETE CASCADE,
    user_id INT REFERENCES users(user_id) ON DELETE SET NULL
);
