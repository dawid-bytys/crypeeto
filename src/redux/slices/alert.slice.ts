import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  message: string;
  color: string;
}

const initialState = null as InitialState | null;

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<InitialState>) => action.payload,
    clearAlert: state => null,
  },
});

export const { setAlert, clearAlert } = alertSlice.actions;
