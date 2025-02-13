import { useState } from "react";
import personsService from "../services/persons";

const PersonForm = ({ persons, setPersons, setNotification, setIsFailure }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingPerson = persons.find((person) => person.name === newName);
    if (existingPerson) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const newPerson = {
          name: newName,
          number: newNumber,
          id: existingPerson.id,
        };
        personsService.update(newPerson).then((data) => {
          const formattedPerson = {
            name: data.name,
            phone: data.number,
            id: data.id
          };
          const newPersons = persons.filter((person) => person.id !== data.id);
          setPersons(newPersons.concat(formattedPerson));
          setNotification(`Updated ${formattedPerson.name}`);
          setTimeout(() => setNotification(""), 5000);
        }).catch((_error) => {
          setNotification(`Information of ${newPerson.name} has already been removed from the server`);
          setIsFailure(true);
          setPersons(persons.filter(person => person.id !== newPerson.id));
          setTimeout(() => {
            setNotification("");
            setIsFailure(false);
          }, 5000);
        });
      }
    } else {
      const newPerson = { name: newName, number: newNumber };
      personsService.create(newPerson).then((data) => {
        const formattedPerson = {
          name: data.name,
          phone: data.number,
          id: data.id,
        };
        setPersons(persons.concat(formattedPerson));
        setNotification(`Added ${formattedPerson.name}`);
        setTimeout(() => setNotification(""), 5000);
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
