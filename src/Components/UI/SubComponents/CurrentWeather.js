import { Weather, Place } from "../../index";
import { fetchWeather, fetchCity } from "./index";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function CurrentWeather() {
  // Accessing store data
  const coords = useSelector((state) => state.coordinates);
  const location = useSelector((state) => state.location);
  const weatherData = useSelector((state) => state.weather.current);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      // if coordinates defined then get weather
      if (coords) {
        const weather = await fetchWeather(coords);
        const city = await fetchCity(coords);

        // Store weather data in redux store
        dispatch(Weather(weather));
        // Store city name in redux store
        dispatch(Place(city));
      }
    }
    fetchData();
  }, [dispatch, coords]);

  return (
    <div className="container flex-col full-w-half-h">
      <h2 className="location scale">
        {location && `${location.city}, ${location.country}`}
      </h2>
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
