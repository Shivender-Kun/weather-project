import { Weather } from "../../index";
import { fetchWeather } from "./index";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function CurrentWeather() {
  const coords = useSelector((state) => state.coordinates);
  const weatherData = useSelector((state) => state.weather.current);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      if (coords) {
        const weather = await fetchWeather(coords);
        dispatch(Weather(weather));
      }
    }
    fetchData();
  }, [dispatch, coords]);

  return (
    <div className="container flex-col full-w-half-h">
      <div className="current-weather flex-col scale">
        {weatherData && (
          <h2 id="current-temp">{String(weatherData.temp).slice(0, 2)}°C</h2>
        )}
      </div>
      <p id="current-condition" className="scale">
        {weatherData && weatherData.weather[0].description.toUpperCase()}
      </p>
    </div>
  );
}

export default CurrentWeather;
