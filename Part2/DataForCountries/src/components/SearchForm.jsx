import { useEffect, useState } from "react";
import CountriesService from "../services/countries";

const SearchForm = ({ setSearchResults }) => {
  const [searchText, setSearchText] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    CountriesService.getAll().then((countries) => setCountries(countries));
  }, []);

  useEffect(() => {
    const searchResults = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(searchResults);
  }, [searchText]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>find countries</label>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
