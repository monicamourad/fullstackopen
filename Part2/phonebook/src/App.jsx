import { useState, useEffect } from "react";
import Notification from "./components/Notification";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [notification, setNotification] = useState("");

  useEffect(() => {
    const promise = personsService.getAll().then((personsBE) => {
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
      <Notification message={notification}/>
      <Filter searchValue={searchValue} setSearchValue={setSearchValue} />
      <h2>Add a New</h2>
      <PersonForm persons={persons} setPersons={setPersons} setNotification={setNotification}/>
      <h2>Numbers</h2>
      <Persons persons={persons} searchValue={searchValue} setPersons={setPersons} setNotification={setNotification}/>
    </div>
  );
};

export default App;
