import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const albumsSlice = createSlice({
  name: "artist",
  initialState: {
    albums: [],
    currPage: 1,
    totalPages: 1,
    perPage: 20,
  },
  reducers: {
    loadAlbums: (state, action: PayloadAction<any>) => {
      state.albums = action.payload;
    },
    loadPagination: (state, action: PayloadAction<any>) => {
      state.totalPages = action.payload.totalPages;
      state.perPage = action.payload.perPage;
    },
    changePage: (state, action: PayloadAction<any>) => {
      state.currPage = action.payload;
    },
  },
});

export const { loadAlbums, loadPagination, changePage } = albumsSlice.actions;

export default albumsSlice.reducer;
