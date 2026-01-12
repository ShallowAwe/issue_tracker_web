import apiClient from "./axiosConfig";
import { ENDPOINTS } from "../constants/apiConstants";

// Create a new team
export const createTeam = async (teamData) => {
  try {
    // teamData should include: name, description
    const response = await apiClient.post(ENDPOINTS.TEAMS.CREATE, teamData);
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to create team";
  }
};

// Assign a member to a team
export const assignMemberToTeam = async (assignmentData) => {
  try {
    // assignmentData should include: teamId, userId, role
    const response = await apiClient.post(
      ENDPOINTS.TEAMS.ASSIGN_MEMBER,
      assignmentData
    );
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to assign member to team";
  }
};

// Assign a project to a team
export const assignProjectToTeam = async (assignmentData) => {
  try {
    // assignmentData should include: teamId, projectKey
    const response = await apiClient.post(
      ENDPOINTS.TEAMS.ASSIGN_PROJECT,
      assignmentData
    );
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to assign project to team";
  }
};
