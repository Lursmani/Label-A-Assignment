import { createSlice } from "@reduxjs/toolkit";

export const darkThemeSlice = createSlice({
  initialState: {
    darkTheme: false,
  },
  name: "sidebar",
  reducers: {
    toggleSidebar: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { toggleSidebar } = darkThemeSlice.actions;

export default darkThemeSlice.reducer;
