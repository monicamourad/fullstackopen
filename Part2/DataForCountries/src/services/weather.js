import axios from "axios";

const baseUrl = "http://api.weatherapi.com";
const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;

const getWeather = ({ cityName }) => {
  return axios
    .get(`${baseUrl}/v1/current.json?key=${weatherApiKey}&q=${cityName}&aqi=no`)
    .then((response) => response.data);
};

export default {
  getWeather,
};
