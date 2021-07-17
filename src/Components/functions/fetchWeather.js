import axios from "axios";

const url =
  "https://api.openweathermap.org/data/2.5/onecall?exclude=hourly,minutely&units=metric";

const fetchWeather = async (lat, lon) => {
  const result = await axios.get(
    `${url}&lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API}`
  );
  console.log(result.data);
  return result;
};

export default fetchWeather;
