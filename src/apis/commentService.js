import apiClient from "./axiosConfig";
import { ENDPOINTS } from "../constants/apiConstants";

// Add a comment to an issue
export const addComment = async (commentData) => {
  try {
    // commentData should include: issueKey, authorId, body
    const response = await apiClient.post(
      ENDPOINTS.COMMENTS.CREATE,
      commentData
    );
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to add comment";
  }
};

// Get all comments for an issue
export const getIssueComments = async (issueKey) => {
  try {
    const response = await apiClient.get(
      ENDPOINTS.COMMENTS.GET_BY_ISSUE(issueKey)
    );
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to fetch comments";
  }
};

// Edit a comment
export const updateComment = async (commentId, commentData) => {
  try {
    // commentData should include: body
    const response = await apiClient.put(
      ENDPOINTS.COMMENTS.UPDATE(commentId),
      commentData
    );
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to update comment";
  }
};

// Delete a comment
export const deleteComment = async (commentId, authorId) => {
  try {
    const response = await apiClient.delete(
      ENDPOINTS.COMMENTS.DELETE(commentId, authorId)
    );
    return response.data;
  } catch (err) {
    throw err.response?.data || "Failed to delete comment";
  }
};
