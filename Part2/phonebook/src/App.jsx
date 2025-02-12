import { useState , useEffect} from "react";
import axios from 'axios'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const promise = 
    axios
    .get("http://localhost:3001/persons")
    .then((response) => {
      const persons = response.data.map(personData => ({ 
        name : personData.name,
        phone : personData.number,
        id: personData.id
      }));
      setPersons(persons);
    })
  },[]);

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
