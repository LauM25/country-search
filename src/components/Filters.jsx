function Filters({ onChangeFilters, onChangeContinent }) {
  const handleChange = (event) => {
    onChangeFilters(event.target.value);
  };
  const handleChangeContinent = (event) => {
    onChangeContinent(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="country">By Country</label>
        <input
          id="country"
          name="country"
          type="text"
          placeholder="Spain..."
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="continent">By Continent</label>
        <select
          name="continent"
          id="continent"
          onChange={handleChangeContinent}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
          <option value="Antartica">Antartica</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
