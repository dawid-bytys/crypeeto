import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const authorizationSlice = createSlice({
  name: "authorization",
  initialState: false,
  reducers: {
    setAuthorization: (state, action: PayloadAction<boolean>) => action.payload,
  },
});

export const { setAuthorization } = authorizationSlice.actions;

export default authorizationSlice;
