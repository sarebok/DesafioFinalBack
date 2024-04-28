import { createProject, getAllProjects } from "../models/projectModel.js";

const registerProject = async (req, res) => {
  try {
    const project = await createProject(req.body);
    res.status(201).json({ message: 'Project created successfully', project });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const showProjects = async (req, res) => {
  try {
    const projects = await getAllProjects();
    if (!projects) {
      return res.status(404).json({ error: 'No projects found' });
    }

    // Return an array of project objects
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { registerProject, showProjects };