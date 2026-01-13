import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userDetailsReducer from "./slices/userDetailsSlice";
// Configure Redux store with all reducers
const store = configureStore({
  reducer: {
    auth: authReducer, // Add auth slice to store
    userDetails: userDetailsReducer,
    // Add more slices here as needed (e.g., issues, teams, etc.)
  },
});

export default store;
