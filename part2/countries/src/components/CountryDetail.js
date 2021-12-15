import React, { useState, useEffect } from "react";
import axios from "axios";

function getCardinalDirection(angle) {
  const directions = [
    " N",
    "NNE",
    "NE",
    "ENE",
    " E",
    "ESE",
    " SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    " W",
    "WNW",
    " NW",
    "NNW",
  ];
  return directions[Math.round(angle / 22.5)];
}

const CountryDetail = ({ filterCountry }) => {
  const [weather, setWeather] = useState(null);

  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    console.log("useEffect call api");
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${filterCountry.capital}&appid=${api_key}&units=metric
        `
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, [api_key, filterCountry]);

  return (
    <div style={{ margin: "20px" }}>
      <h1>{filterCountry.name.common}</h1>
      <p>capital {filterCountry.capital}</p>
      <p>population {filterCountry.population}</p>
      <p>
        languages
        {Object.values(filterCountry.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </p>
      <img src={filterCountry.flags.png} width="200px" alt="flag" />
      <h2>Weather in {filterCountry.capital}</h2>
      {weather && (
        <>
          <div>temperature: {weather.main.temp} Celcius</div>
          <div>
            {weather.weather.map((item) => (
              <img
                height="100"
                key={item.id}
                src={`http://openweathermap.org/img/wn/${item.icon}.png`}
                alt={item.description}
              />
            ))}
          </div>
          <div>
            wind: {(weather.wind.speed * 2.23694).toFixed(2)} mph direction
            {getCardinalDirection(weather.wind.deg)}
          </div>
        </>
      )}
    </div>
  );
};
export default CountryDetail;
