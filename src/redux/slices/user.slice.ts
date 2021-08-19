import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserData } from "../services/auth.service";

interface UserData {
  status: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  picture: string;
  wallets: {
    name: string;
    amount: number;
  }[];
}

interface InitialState {
  status: string | null;
  data: {
    first_name: string | null;
    last_name: string | null;
    username: string | null;
    email: string | null;
    picture: string | null;
    wallets:
      | {
          name: string;
          amount: number;
        }[]
      | null;
  };
}

const initialState: InitialState = {
  status: null,
  data: {
    first_name: null,
    last_name: null,
    username: null,
    email: null,
    picture: null,
    wallets: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserData.pending.type]: state => {
      state.status = "pending";
    },
    [getUserData.fulfilled.type]: (state, action: PayloadAction<UserData>) => {
      state.status = "success";
      state.data = action.payload;
    },
    [getUserData.rejected.type]: state => {
      state.status = "failed";
    },
  },
});
