import axios from "axios";

const url =
  "https://api.openweathermap.org/data/2.5/onecall?exclude=minutely&units=metric";

const fetchWeather = async ({ lat, lon }) => {
  try {
    if (lat && lon) {
      const result = await axios.get(
        `${url}&lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API}`
      );
      return result.data;
    }
  } catch (error) {
    return error.message;
  }
};

export default fetchWeather;
