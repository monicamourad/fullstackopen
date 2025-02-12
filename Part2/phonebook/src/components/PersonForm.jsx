import { useState } from "react";
import personsService from "../services/persons";

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const doesNameExists =
      persons.find((person) => person.name === newName) !== undefined;
    if (doesNameExists) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      const newPerson = { name: newName, number: newNumber };
      personsService.create(newPerson).then((data) => {
        const formattedPerson = {
          name: data.name,
          phone: data.number,
          id: data.id,
        };
        setPersons(persons.concat(formattedPerson));
      });
      setNewName("");
      setNewNumber("");
    }
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input type="text" value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number:{" "}
        <input type="number" value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
