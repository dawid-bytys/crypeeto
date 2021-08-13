import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { register, login } from "../services/auth.service";

interface InitialState {
  registration: string | null;
  login: string | null;
  is_authorized: boolean;
}

const initialState: InitialState = {
  registration: null,
  login: null,
  is_authorized: false,
};

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    setAuthorization: (state, action: PayloadAction<boolean>) => {
      state.is_authorized = action.payload;
    },
  },
  extraReducers: {
    [register.pending.type]: state => {
      state.registration = "pending";
    },
    [register.fulfilled.type]: state => {
      state.registration = "success";
    },
    [register.rejected.type]: state => {
      state.registration = "failed";
    },
    [login.pending.type]: state => {
      state.login = "pending";
    },
    [login.fulfilled.type]: state => {
      state.login = "success";
      state.is_authorized = true;
    },
    [login.rejected.type]: state => {
      state.login = "failed";
    },
  },
});

export const { setAuthorization } = authorizationSlice.actions;
