import Main from "./UI/Main";
import Header from "./UI/Header";
import Footer from "./UI/Footer";

import geolocation from "./functions/geolocation";
import fetchCoords from "./functions/fetchCoords";
import fetchWeather from "./functions/fetchWeather";
import weatherList from "./functions/weatherList";


import { Place, Coords, Weather } from "../store";

export {
  Header,
  Footer,
  Main,
  fetchWeather,
  geolocation,
  fetchCoords,
  weatherList,
  Place,
  Coords,
  Weather,
};
