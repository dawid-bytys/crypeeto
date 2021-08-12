import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: false,
  reducers: {
    handleSidebar: state => !state,
    closeSidebar: state => false,
  },
});

export const { handleSidebar, closeSidebar } = sidebarSlice.actions;

export default sidebarSlice;
