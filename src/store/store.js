import { configureStore } from "@reduxjs/toolkit";
import { location, coordinates, weather, NightTheme } from "./index";

// Creating a new store
const store = configureStore({
  reducer: {
    location,
    coordinates,
    weather,
    NightTheme,
  },
});

export default store;
