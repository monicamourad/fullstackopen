import { useEffect, useState } from "react";
import Country from "./Country";

const SearchResults = ({ searchResults }) => {
  const [countryToShow, setCountryToShow] = useState(null);
  useEffect(() => setCountryToShow(null), [searchResults]);

  if (searchResults.length === 0) return;

  if (searchResults.length === 1) {
    return <Country country={searchResults[0]} />;
  } else if (countryToShow) {
    return <Country country={countryToShow} />;
  } else if (searchResults.length > 10) {
    return <p>Too Many Matches, specify another</p>;
  } else {
    return searchResults.map((result) => (
      <div key={result.name.official} className="listedCountries">
        <p>{result.name.common}</p>
        <button type="button" onClick={() => setCountryToShow(result)}>
          Show
        </button>
      </div>
    ));
  }
};

export default SearchResults;
