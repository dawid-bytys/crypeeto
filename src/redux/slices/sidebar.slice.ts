import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: false,
  reducers: {
    handleSidebar: state => !state,
    closeSidebar: state => false,
  },
});

export const { handleSidebar, closeSidebar } = sidebarSlice.actions;
