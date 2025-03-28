import CountryTarjet from "./CountryTarjet";

function ListCountries({ countries }) {
  return (
    <div>
      {countries.map((country) => {
        return <CountryTarjet key={country.id} infoCountry={country} />;
      })}
    </div>
  );
}
export default ListCountries;
