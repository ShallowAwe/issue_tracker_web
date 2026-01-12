import apiClient from "./axiosConfig";
import { ENDPOINTS } from "../constants/apiConstants";

// Get all projects
export const getAllProjects = async () => {
  try {
    const response = await apiClient.get(ENDPOINTS.PROJECTS.GET_ALL);
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to fetch projects";
  }
};

// Get project by key
export const getProject = async (projectKey) => {
  try {
    const response = await apiClient.get(
      ENDPOINTS.PROJECTS.GET_BY_KEY(projectKey)
    );
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to fetch project";
  }
};

// Create a new project
export const createProject = async (projectData) => {
  try {
    // projectData should include: key, name, description
    const response = await apiClient.post(
      ENDPOINTS.PROJECTS.CREATE,
      projectData
    );
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to create project";
  }
};

// Update a project
export const updateProject = async (projectKey, projectData) => {
  try {
    // projectData can include: name, description, archived
    const response = await apiClient.put(
      ENDPOINTS.PROJECTS.UPDATE(projectKey),
      projectData
    );
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to update project";
  }
};

// Archive a project
export const archiveProject = async (projectKey) => {
  try {
    const response = await apiClient.patch(
      ENDPOINTS.PROJECTS.ARCHIVE(projectKey)
    );
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to archive project";
  }
};

// Delete a project
export const deleteProject = async (projectKey) => {
  try {
    const response = await apiClient.delete(
      ENDPOINTS.PROJECTS.DELETE(projectKey)
    );
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to delete project";
  }
};
