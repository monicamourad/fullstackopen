import personsService from "../services/persons";

const Persons = ({ persons, searchValue, setPersons, setNotification, setIsFailure }) => {
  const handleDelete = (personToDelete) => {
    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      personsService.deletePerson(personToDelete).then((personBE) => {
        setPersons(persons.filter((person) => person.id !== personBE.id));
        setNotification(`Deleted ${personBE.name}`);
        setTimeout(() => setNotification(""), 5000);
      }).catch((_error) => {
        setNotification(`Information of ${personToDelete.name} has already been removed from the server`);
        setIsFailure(true);
        setPersons(persons.filter(person => person.id !== personToDelete.id));
        setTimeout(() => {
          setNotification("");
          setIsFailure(false);
        }, 5000);
      });;
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
