const Filter = ({searchValue, setSearchValue}) => {
  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
    filter shown with{" "}
    <input
      type="text"
      value={searchValue}
      onChange={handleSearchValueChange}
    />
  </div>
  );
};

export default Filter;
