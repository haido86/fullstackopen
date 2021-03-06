import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryDetail from "./components/CountryDetail";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [showDetail, setShowDetail] = useState(false);

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

  console.log("showDetail", showDetail);

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
                <CountryDetail
                  key={filterCountry.name.common}
                  filterCountry={filterCountry}
                />
              ) : (
                <p key={filterCountry.name.common}>
                  {filterCountry.name.common}{" "}
                  <button
                    onClick={() => setShowDetail(filterCountry.name.common)}
                  >
                    show
                  </button>
                </p>
              )
            )
          : filter.length > 0 && "Too many matches, specify another filter"}
        {showDetail &&
          countriesFilter
            .filter((country) => country.name.common === showDetail)
            .map((filterCountry) => (
              <CountryDetail
                key={filterCountry.name.common}
                filterCountry={filterCountry}
              />
            ))}
      </div>
    </>
  );
};
export default App;
