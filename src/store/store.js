import { configureStore } from "@reduxjs/toolkit";
import { search, coordinates, weather, NightTheme } from "./index";

const store = configureStore({
  reducer: {
    search,
    coordinates,
    weather,
    NightTheme,
  },
});

export default store;
