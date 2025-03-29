import CountryTarjet from "./CountryTarjet";

function ListCountries({ countries }) {
  return (
    <div>
      {countries.map((country) => {
        return <CountryTarjet key={country.flag} infoCountry={country} />;
      })}
    </div>
  );
}
export default ListCountries;
