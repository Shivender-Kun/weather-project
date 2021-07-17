import axios from "axios";

const url = "https://api.openweathermap.org/geo/1.0/direct?q=";

async function fetchCoords(city) {
  const loc = await axios.get(
    `${url}${city}&appid=${process.env.REACT_APP_WEATHER_API}&limit=1`
  );
  return { lat: loc.lat, lon: loc.lon };
}

export default fetchCoords;
