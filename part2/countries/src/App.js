import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const addFilter = (event) => {
    event.preventDefault();
    setFilter("");
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  let countriesFilter = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter)
  );

  return (
    <>
      <div style={{ margin: "20px" }}>find countries</div>
      <form style={{ margin: "20px" }} onSubmit={addFilter}>
        <input value={filter} onChange={handleFilterChange} />
      </form>
      <div>
        {countriesFilter.length <= 10
          ? countriesFilter.map((filterCountry) =>
              countriesFilter.length === 1 ? (
                <div key={filterCountry.name.common} style={{ margin: "20px" }}>
                  <h1>{filterCountry.name.common}</h1>
                  <p>capital {filterCountry.capital}</p>
                  <p>population {filterCountry.population}</p>
                  <p>
                    languages{" "}
                    {Object.values(filterCountry.languages).map((language) => (
                      <li>{language}</li>
                    ))}
                  </p>
                  <img src={filterCountry.flags.png} width="200px" alt="flag" />
                </div>
              ) : (
                <p key={filterCountry.name.common}>
                  {filterCountry.name.common}
                </p>
              )
            )
          : filter.length > 0 && "Too many matches, specify another filter"}
      </div>
    </>
  );
};
export default App;
