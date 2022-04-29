import { configureStore } from "@reduxjs/toolkit";
import albumsReducer from "./albums";
import sidebarReducer from "./darkTheme";

const store = configureStore({
  reducer: { albums: albumsReducer, sidebarOpen: sidebarReducer },
});

export default store;
