import axios from "axios";

const url = "https://api.openweathermap.org/geo/1.0/direct?q=";

async function fetchCoords(city) {
  try {
    // If city is defined get coordinates
    if (city) {
      const loc = await axios.get(
        `${url}${city}&appid=${process.env.REACT_APP_WEATHER_API}`
      );
      return { lat: loc.data[0].lat, lon: loc.data[0].lon };
    }
  } catch (error) {
    return error;
  }
}

export default fetchCoords;
