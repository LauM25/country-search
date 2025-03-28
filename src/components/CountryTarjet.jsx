function CountryTarjet({ infoCountry }) {
  return (
    <div className="countryContainer">
      <p>{infoCountry.flag}</p>
      <h3>{infoCountry.name.official}</h3>
      <p>{infoCountry.capital}</p>
      <p>{infoCountry.continents}</p>
    </div>
  );
}
export default CountryTarjet;
