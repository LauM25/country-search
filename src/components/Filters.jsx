function Filters({ onChangeFilters }) {
  const handleChange = (event) => {
    onChangeFilters(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="">By Country</label>
        <input type="text" placeholder="Spain..." onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">By Continent</label>
        <select name="" id="">
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
