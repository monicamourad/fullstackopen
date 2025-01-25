import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-1234567", key: "Arto Hellas" },
  ]);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter searchValue={searchValue} setSearchValue={setSearchValue} />
      <h2>Add a New</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={persons} searchValue={searchValue} />
    </div>
  );
};

export default App;
