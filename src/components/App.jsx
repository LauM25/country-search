import "../scss/App.scss";
import Filters from "./Filters";
import ListCountries from "./ListCountries";
import data from "../services/data.json";
import { useState } from "react";

function App() {
  const [filterValue, setFilterValue] = useState("");
  const changeFilterValue = (inputValue) => {
    setFilterValue(inputValue);
  };
  const filteredCountries = data.filter((countries) => {
    return countries.name.official
      .toLowerCase()
      .includes(filterValue.toLowerCase());
  });
  return (
    <>
      <main>
        <h1>Country Search</h1>
        <Filters onChangeFilters={changeFilterValue} />
        <ListCountries countries={filteredCountries} />
      </main>
    </>
  );
}

export default App;
