import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoaded: false,
  id: null,
  username: null,
  email: null,
  firstName: null,
  lastName: null,
  isActive: false,
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      return {
        isLoaded: true,
        id: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        isActive: action.payload.isActive,
      };
    },

    clearUserDetails: () => initialState,

    updateUserDetails: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setUserDetails, clearUserDetails, updateUserDetails } =
  userDetailsSlice.actions;

export default userDetailsSlice.reducer;
