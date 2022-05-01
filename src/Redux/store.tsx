import { configureStore } from "@reduxjs/toolkit";
import albumsReducer from "./albums";
import darkTheme from "./darkTheme";

const store = configureStore({
  reducer: { albums: albumsReducer, darkTheme: darkTheme },
});

export default store;
