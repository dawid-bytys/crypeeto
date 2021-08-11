import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slices/sidebar";
import authorizationSlice from "./slices/authorization";

const store = configureStore({
  reducer: {
    sidebar_active: sidebarSlice.reducer,
    is_authorized: authorizationSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

// Export selectors
export const selectSidebar = (state: RootState) => state.sidebar_active;
export const selectAuthorization = (state: RootState) => state.is_authorized;

export default store;
