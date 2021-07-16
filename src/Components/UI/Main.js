import React from "react";
import { Search, CurrentWeather } from "./SubComponents/index";
function Main() {
  return (
    <div className="Main full-w-h">
      <Search />
      <CurrentWeather />
    </div>
  );
}

export default Main;
