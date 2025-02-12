import personsService from "../services/persons";

const Persons = ({ persons, searchValue, setPersons }) => {
  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService
        .deletePerson(person)
        .then((personBE) =>
          setPersons(persons.filter((person) => person.id !== personBE.id))
        );
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
