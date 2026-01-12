import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

// Configure Redux store with all reducers
const store = configureStore({
  reducer: {
    auth: authReducer, // Add auth slice to store
    // Add more slices here as needed (e.g., issues, teams, etc.)
  },
});

export default store;
