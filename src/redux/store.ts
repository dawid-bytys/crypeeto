import { configureStore } from "@reduxjs/toolkit";
import { sidebarSlice } from "./slices/sidebar.slice";
import { alertSlice } from "./slices/alert.slice";
import { authorizationSlice } from "./slices/auth.slice";
import { userSlice } from "./slices/user.slice";
import { themeSlice } from "./slices/theme.slice";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    sidebar_active: sidebarSlice.reducer,
    alert: alertSlice.reducer,
    authorization: authorizationSlice.reducer,
    user: userSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

// Export selectors
export const selectTheme = (state: RootState) => state.theme;
export const selectSidebar = (state: RootState) => state.sidebar_active;
export const selectAuthorization = (state: RootState) => state.authorization;
export const selectAlert = (state: RootState) => state.alert;
export const selectUser = (state: RootState) => state.user;
