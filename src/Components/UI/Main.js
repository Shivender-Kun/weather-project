import React from "react";
import { useSelector } from "react-redux";
import { Search, CurrentWeather, Forecast } from "./SubComponents/index";
function Main() {
  const weather = useSelector((state) => state.weather);
  return (
    <div className="Main full-w-h">
      <Search />
      <CurrentWeather />
      <Forecast />
    </div>
  );
}

export default Main;
