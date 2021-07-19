import axios from "axios";

const url =
  "https://api.openweathermap.org/data/2.5/onecall?exclude=minutely&units=metric";

const fetchWeather = async ({ lat, lon }) => {
  try {
    let result;
    // if latitude & longitude defined get weather
    if (lat && lon) {
      result = await axios.get(
        `${url}&lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API}`
      );
      // } else {
      //   result = await axios.get(
      //     `${url}&lat=28.38&lon=94.04&appid=${process.env.REACT_APP_WEATHER_API}`
      //   );
    }
    return result.data;
  } catch (error) {
    return error;
  }
};

export default fetchWeather;
