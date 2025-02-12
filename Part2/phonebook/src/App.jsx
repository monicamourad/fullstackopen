import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import PersonsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const promise = PersonsService.getAll().then((personsBE) => {
      const persons = personsBE.map((personBE) => ({
        name: personBE.name,
        phone: personBE.number,
        id: personBE.id,
      }));
      setPersons(persons);
    });
  }, []);

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
