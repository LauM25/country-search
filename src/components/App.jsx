import "../scss/App.scss";
import Filters from "./Filters";
import ListCountries from "./ListCountries";
import data from "../services/data.json";
import { useState } from "react";

function App() {
  const [filterValue, setFilterValue] = useState("");
  const [filterContinentValue, setFilterContinentValue] = useState("all");
  const changeFilterValue = (inputValue) => {
    setFilterValue(inputValue);
  };
  const changeFilterValueContinent = (continentValue) => {
    setFilterContinentValue(continentValue);
  };
  const filteredCountries = data
    .filter((countries) => {
      return countries.name.official
        .toLowerCase()
        .includes(filterValue.toLowerCase());
    })
    .filter((countries) => {
      return filterContinentValue === "all"
        ? true
        : countries.continents[0] === filterContinentValue;
    });

  return (
    <>
      <main>
        <h1>Country Search</h1>
        <Filters
          onChangeFilters={changeFilterValue}
          onChangeContinent={changeFilterValueContinent}
        />
        <ListCountries countries={filteredCountries} />
      </main>
    </>
  );
}

export default App;
