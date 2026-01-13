import apiClient from "./axiosConfig";
import { ENDPOINTS } from "../constants/apiConstants";

/**
 * Normalizes all API errors into a predictable shape.
 * UI and Redux should rely ONLY on this contract.
 */
const normalizeError = (err, fallbackMessage) => {
  return {
    message:
      err?.response?.data?.message || err?.response?.data || fallbackMessage,
    status: err?.response?.status || 500,
  };
};

/**
 * Login user
 * @returns { token, user }
 */
export const login = async ({ username, password }) => {
  try {
    const { data } = await apiClient.post(ENDPOINTS.AUTH.LOGIN, {
      username,
      password,
    });
    return data;
  } catch (err) {
    throw normalizeError(err, "Login failed");
  }
};

/**
 * Register new user
 * @returns { token, user }
 */
export const register = async ({
  username,
  email,
  password,
  firstName,
  lastName,
}) => {
  try {
    const { data } = await apiClient.post(ENDPOINTS.AUTH.REGISTER, {
      username,
      email,
      password,
      firstName,
      lastName,
    });
    return data;
  } catch (err) {
    throw normalizeError(err, "Registration failed");
  }
};

/**
 * Fetch authenticated user details
 * Requires valid JWT (handled by axios interceptor)
 */
export const getUserDetails = async () => {
  try {
    const { data } = await apiClient.get(ENDPOINTS.AUTH.USER_DETAILS);
    return data;
  } catch (err) {
    throw normalizeError(err, "Failed to fetch user details");
  }
};
