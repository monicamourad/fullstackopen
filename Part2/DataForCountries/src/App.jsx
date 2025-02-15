import { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";

import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <SearchForm setSearchResults={setSearchResults} />
      <SearchResults searchResults={searchResults} />
    </>
  );
}

export default App;
