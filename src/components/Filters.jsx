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
          <option value="volvo">All</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
