import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slices/sidebar.slice";
import authorizationSlice from "./slices/auth.slice";
import alertSlice from "./slices/alert.slice";
import userSlice from "./slices/user.slice";

const store = configureStore({
  reducer: {
    sidebar_active: sidebarSlice.reducer,
    alert: alertSlice.reducer,
    authorization: authorizationSlice.reducer,
    user: userSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

// Export selectors
export const selectSidebar = (state: RootState) => state.sidebar_active;
export const selectAuthorization = (state: RootState) =>
  state.authorization.is_authorized;
export const selectAlert = (state: RootState) => state.alert;
export const selectUser = (state: RootState) => state.user;

export default store;
