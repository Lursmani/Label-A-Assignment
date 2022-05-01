import { createSlice } from "@reduxjs/toolkit";

export const darkThemeSlice = createSlice({
  initialState: {
    darkTheme: false,
  },
  name: "darkTheme",
  reducers: {
    ToggleDarkTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { ToggleDarkTheme } = darkThemeSlice.actions;

export default darkThemeSlice.reducer;
