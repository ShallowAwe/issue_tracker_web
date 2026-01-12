import apiClient from "./axiosConfig";
import { ENDPOINTS } from "../constants/apiConstants";

// Get all issues for a project
export const getIssuesByProject = async (projectKey) => {
  try {
    const response = await apiClient.get(
      ENDPOINTS.ISSUES.GET_BY_PROJECT(projectKey)
    );
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to fetch issues";
  }
};

// Get a specific issue by key (e.g., PROJ-1)
export const getIssue = async (issueKey) => {
  try {
    const response = await apiClient.get(ENDPOINTS.ISSUES.GET_BY_KEY(issueKey));
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to fetch issue";
  }
};

// Create a new issue
export const createIssue = async (issueData) => {
  try {
    // issueData should include: projectKey, summary, description, typeId, priorityId, reporterId, assigneeId, dueDate (optional)
    const response = await apiClient.post(ENDPOINTS.ISSUES.CREATE, issueData);
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to create issue";
  }
};

// Update an issue
export const updateIssue = async (issueKey, issueData) => {
  try {
    // issueData can include: summary, description, priorityId, statusId, assigneeId, dueDate
    const response = await apiClient.put(
      ENDPOINTS.ISSUES.UPDATE(issueKey),
      issueData
    );
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to update issue";
  }
};

// Delete an issue
export const deleteIssue = async (issueKey) => {
  try {
    const response = await apiClient.delete(ENDPOINTS.ISSUES.DELETE(issueKey));
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to delete issue";
  }
};
