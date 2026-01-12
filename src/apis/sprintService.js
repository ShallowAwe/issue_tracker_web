import apiClient from "./axiosConfig";
import { ENDPOINTS } from "../constants/apiConstants";

// Create a new sprint
export const createSprint = async (sprintData) => {
  try {
    // sprintData should include: projectKey, name, startDate, endDate, goal
    const response = await apiClient.post(ENDPOINTS.SPRINTS.CREATE, sprintData);
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to create sprint";
  }
};

// Get all sprints for a project
export const getProjectSprints = async (projectKey) => {
  try {
    const response = await apiClient.get(
      ENDPOINTS.SPRINTS.GET_BY_PROJECT(projectKey)
    );
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to fetch sprints";
  }
};

// Update sprint status (PLANNED, ACTIVE, COMPLETED)
export const updateSprintStatus = async (sprintId, status) => {
  try {
    const response = await apiClient.patch(
      ENDPOINTS.SPRINTS.UPDATE_STATUS(sprintId, status)
    );
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to update sprint status";
  }
};

// Get all issues in a sprint
export const getSprintIssues = async (sprintId) => {
  try {
    const response = await apiClient.get(
      ENDPOINTS.SPRINTS.GET_ISSUES(sprintId)
    );
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to fetch sprint issues";
  }
};

// Add an issue to a sprint
export const addIssueToSprint = async (sprintId, issueKey) => {
  try {
    const response = await apiClient.post(
      ENDPOINTS.SPRINTS.ADD_ISSUE(sprintId, issueKey)
    );
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to add issue to sprint";
  }
};

// Remove an issue from a sprint
export const removeIssueFromSprint = async (sprintId, issueKey) => {
  try {
    const response = await apiClient.delete(
      ENDPOINTS.SPRINTS.REMOVE_ISSUE(sprintId, issueKey)
    );
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to remove issue from sprint";
  }
};
