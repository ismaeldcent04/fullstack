export const PersonNumbers = ({ persons, onDelete }) => {
  return (
    <section>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.id}>
          <span>
            {person.name} {person.number}
          </span>
          <button onClick={() => onDelete(person)}>delete</button>
        </div>
      ))}
    </section>
  );
};
