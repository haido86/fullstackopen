const CountryDetail = ({ filterCountry }) => {
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
    </div>
  );
};
export default CountryDetail;
