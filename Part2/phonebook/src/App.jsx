import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-1234567", key: "Arto Hellas" },
  ]);
  const [searchValue, setSearchValue] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const doesNameExists =
      persons.find((person) => person.name === newName) !== undefined;
    if (doesNameExists) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(
        persons.concat({ name: newName, phone: newNumber, key: newName })
      );
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter shown with{" "}
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchValueChange}
        />
      </div>
      <h2>Add a New</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:{" "}
          <input type="text" value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number:{" "}
          <input
            type="number"
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(
        (person) =>
          (!searchValue ||
            person.name.toLowerCase().includes(searchValue.toLowerCase())) && (
            <p key={person.name}>
              {person.name} {person.phone}
            </p>
          )
      )}
    </div>
  );
};

export default App;
