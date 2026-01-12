import apiClient from "./axiosConfig"; // Use configured axios instance
import { ENDPOINTS } from "../constants/apiConstants";

console.log("Auth endpoints:", ENDPOINTS.AUTH);

// Login function - authenticates user and returns JWT token
export const login = async ({ username, password }) => {
  try {
    const response = await apiClient.post(ENDPOINTS.AUTH.LOGIN, {
      username,
      password,
    });
    return response.data; // Returns { token, userId }
  } catch (err) {
    throw err.response?.data || "Login failed";
  }
};

// Register function - creates new user and returns JWT token
export const register = async ({
  username,
  email,
  password,
  firstName,
  lastName,
}) => {
  try {
    const response = await apiClient.post(ENDPOINTS.AUTH.REGISTER, {
      username,
      email,
      password,
      firstName,
      lastName,
    });
    return response.data; // Returns { token, userId }
  } catch (err) {
    throw err.response?.data || "Registration failed";
  }
};
