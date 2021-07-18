import React from "react";
import { weatherList } from "./index";
import { useSelector } from "react-redux";

function Forecast() {
  const weatherData = useSelector((state) => state.weather);

  return (
    <div className="Forecast full-w-half-h flex-col">
      <h2>Hourly Forecast</h2>
      <ol className="weather-list flex-row">
        <li className="weather-item flex-col">
          <div className="date-time">Time</div>
          <div className="temp">Temperature</div>
          <div className="weather-condition">Weather</div>
        </li>
        {weatherData && weatherList(weatherData.hourly)}
      </ol>
      <h2>8-Days Forecast</h2>
      <ul className="weather-list flex-row">
        <li className="weather-item flex-col">
          <div className="date-time">Date</div>
          <div className="temp">Temperature</div>
          <div className="weather-condition">Weather</div>
        </li>
        {weatherData && weatherList(weatherData.daily)}
      </ul>
    </div>
  );
}

export default Forecast;
