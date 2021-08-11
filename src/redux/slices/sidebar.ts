import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: false,
  reducers: {
    handleSidebar: state => !state,
  },
});

export const { handleSidebar } = sidebarSlice.actions;

export default sidebarSlice;
