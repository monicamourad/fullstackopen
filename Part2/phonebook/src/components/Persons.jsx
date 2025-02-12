const Persons = ({ persons, searchValue }) => {
  return persons.map(
    (person) =>
      (!searchValue ||
        person.name.toLowerCase().includes(searchValue.toLowerCase())) && (
        <p key={person.id}>
          {person.name} {person.phone}
        </p>
      )
  );
};

export default Persons;
