import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: "dark",
  reducers: {
    handleTheme: state => (state === "dark" ? "light" : "dark"),
  },
});

export const { handleTheme } = themeSlice.actions;
