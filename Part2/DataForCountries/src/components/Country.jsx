import { useEffect, useState } from "react";
import weatherService from "../services/weather";

const Country = ({ country }) => {
  const [weather, setWeather] = useState(undefined);

  useEffect(() => {
    weatherService
      .getWeather({ cityName: country.name.common })
      .then((weather) => setWeather(weather));
  }, []);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>
        <p className="countryDetail">Capital {country.capital[0]}</p>
        <p className="countryDetail">Area {country.area}</p>
      </div>
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.png} />
      {weather && (
        <>
          <h2>Weather in {country.capital}</h2>
          <p>Temperature {weather.current.temp_c} Celsius</p>
          <img src={`https:${weather.current.condition.icon}`} />
          <p>Wind {Math.round(weather.current.wind_kph / 3.6, 2)} m/s</p>
        </>
      )}
    </div>
  );
};
export default Country;
