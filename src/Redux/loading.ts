import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "artist",
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, action: PayloadAction<any>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
