import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  initialState: {
    sidebarOpen: false,
  },
  name: "sidebar",
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
