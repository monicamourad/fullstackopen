import personsService from "../services/persons";

const Persons = ({ persons, searchValue, setPersons, setNotification }) => {
  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService.deletePerson(person).then((personBE) => {
        setPersons(persons.filter((person) => person.id !== personBE.id));
        setNotification(`Deleted ${personBE.name}`);
        setTimeout(() => setNotification(""), 5000);
      });
    }
  };

  return persons.map(
    (person) =>
      (!searchValue ||
        person.name.toLowerCase().includes(searchValue.toLowerCase())) && (
        <p key={person.id}>
          {person.name} {person.phone}
          <button onClick={() => handleDelete(person)}>Delete</button>
        </p>
      )
  );
};

export default Persons;
