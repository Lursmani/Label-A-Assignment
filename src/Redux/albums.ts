import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const albumsSlice = createSlice({
  name: "artist",
  initialState: {
    albums: {},
    loading: false,
    error: null,
  },
  reducers: {
    loadAlbums: (state, action: PayloadAction<any>) => {
      state.albums = action.payload;
    },
  },
});

export const { loadAlbums } = albumsSlice.actions;

export default albumsSlice.reducer;
