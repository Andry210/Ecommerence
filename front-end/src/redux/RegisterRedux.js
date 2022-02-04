import { createSlice } from "@reduxjs/toolkit";

const RegisterUserSlice = createSlice({
    name: "user",
    initialState: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    reducers: {
      registerStart: (state) => {
        state.isFetching = true;
      },
      registerSuccess: (state, action) => {
        state.isFetching = false;
        state.currentUser = action.payload;
        state.error = false;
      },
      registerFaliure: (state) => {
        state.isFetching = false;
        state.error = true;
      },
    },
  });
  
  export const { registerStart, registerSuccess, registerFaliure } = RegisterUserSlice.actions;
  export default RegisterUserSlice.reducer;
  