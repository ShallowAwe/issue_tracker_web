import { createSlice } from "@reduxjs/toolkit";

// Initial state for authentication
const initialState = {
  isAuthenticated: false, // Track if user is logged in
  user: null, // Store user data (name, email, etc.)
  token: null, // Store JWT token for API calls
};

// Create auth slice with reducers
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Called when login is successful
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user; // User info from API
      state.token = action.payload.token; // JWT token from API
    },
    // Called when user logs out
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
});

// Export actions to use in components
export const { loginSuccess, logout } = authSlice.actions;

// Export reducer to add to store
export default authSlice.reducer;
