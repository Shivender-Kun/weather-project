import React from "react";
import { useSelector } from "react-redux";
import { Search, CurrentWeather, Forecast } from "./SubComponents/index";
function Main() {
  return (
    <div className="Main full-w-h">
      <Search />
      <CurrentWeather />
      <Forecast />
    </div>
  );
}

export default Main;
