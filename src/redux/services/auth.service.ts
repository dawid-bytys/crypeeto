import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAlert } from "../slices/alert.slice";
import axios from "axios";
import { setAuthorization } from "../slices/auth.slice";

interface UserData {
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

interface Credentials {
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  confirm_password: string;
  email: string;
}

// Async thunk action for a user registration
export const register = createAsyncThunk(
  "auth/register",
  async (
    {
      first_name,
      last_name,
      username,
      password,
      confirm_password,
      email,
    }: Credentials,
    { dispatch, rejectWithValue }
  ) => {
    try {
      const response = await axios.post<{ message: string }>("/auth/register", {
        first_name: first_name,
        last_name: last_name,
        username: username,
        password: password,
        confirm_password: confirm_password,
        email: email,
      });

      dispatch(setAlert({ message: response.data.message, color: "#00ba7a" }));
    } catch (err) {
      dispatch(
        setAlert({
          message: err.response.data.message || err.message,
          color: "#ff0000",
        })
      );
      return rejectWithValue(err.message);
    }
  }
);

// Async thunk action for a user login
export const login = createAsyncThunk(
  "auth/login",
  async (
    { username, password }: Omit<Credentials, "email">,
    { dispatch, rejectWithValue }
  ) => {
    try {
      const response = await axios.post<{ access_token: string }>(
        "/auth/login",
        {
          username: username,
          password: password,
        }
      );

      localStorage.setItem("access_token", response.data.access_token);
      dispatch(
        setAlert({
          message: "You've been logged in successfully!",
          color: "#00ba7a",
        })
      );
    } catch (err) {
      dispatch(
        setAlert({
          message: err.response.data.message || err.message,
          color: "#ff0000",
        })
      );
      return rejectWithValue(err.message);
    }
  }
);

// Async thunk action for getting a user's data
export const getUserData = createAsyncThunk(
  "auth/user",
  async (token: string, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get<UserData>("/auth/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(setAuthorization(true));
      return response.data;
    } catch (err) {
      dispatch(
        setAlert({
          message: err.response.data.message || err.message,
          color: "#ff0000",
        })
      );
      localStorage.removeItem("access_token");
      return rejectWithValue(err.message);
    }
  }
);
