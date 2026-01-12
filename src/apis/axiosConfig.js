import axios from "axios";
import { BASE_URL } from "../constants/apiConstants";
import store from "../store/store";

// Create axios instance with base configuration
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor - automatically adds token to every API call
apiClient.interceptors.request.use(
  (config) => {
    // Get current token from Redux store
    const token = store.getState().auth.token;

    // If token exists, add it to Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Response interceptor - handle common response errors
apiClient.interceptors.response.use(
  (response) => {
    // Return successful responses as-is
    return response;
  },
  (error) => {
    // Handle 401 Unauthorized - token expired or invalid
    if (error.response?.status === 401) {
      // Could dispatch logout action here if needed
      console.error("Unauthorized - token may be invalid or expired");
    }

    // Handle other errors
    return Promise.reject(error);
  }
);

export default apiClient;
