import Country from "./Country";

const SearchResults = ({ searchResults }) => {
  if (searchResults.length === 0) return;
  if (searchResults.length === 1) {
    return <Country country={searchResults[0]}/>;
  } else if (searchResults.length > 10) {
    return <p>Too Many Matches, specify another</p>;
  } else {
    return searchResults.map((result) => (
      <p key={result.name.official}>{result.name.common}</p>
    ));
  }
};

export default SearchResults;
