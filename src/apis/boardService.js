import apiClient from "./axiosConfig";
import { ENDPOINTS } from "../constants/apiConstants";

// Get Kanban board for a project
export const getProjectBoard = async (projectKey) => {
  try {
    const response = await apiClient.get(
      ENDPOINTS.BOARDS.GET_PROJECT_BOARD(projectKey)
    );
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to fetch project board";
  }
};

// Get Kanban board for a sprint
export const getSprintBoard = async (sprintId) => {
  try {
    const response = await apiClient.get(
      ENDPOINTS.BOARDS.GET_SPRINT_BOARD(sprintId)
    );
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to fetch sprint board";
  }
};
