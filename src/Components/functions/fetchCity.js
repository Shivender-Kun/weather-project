import axios from "axios";

const url = "https://api.openweathermap.org/geo/1.0/reverse?";

async function fetchCity({ lat, lon }) {
  try {
    // If city is defined get coordinates
    if (lat && lon) {
      const city = await axios.get(
        `${url}lat=${lat}&lon=${lon}&limit=1&appid=${process.env.REACT_APP_WEATHER_API}`
      );
      return { city: city.data[0].name, country: city.data[0].country };
    }
  } catch (error) {
    console.log(error);
    return;
  }
}

export default fetchCity;
