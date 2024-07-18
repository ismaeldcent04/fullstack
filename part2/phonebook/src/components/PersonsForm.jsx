import { useState } from "react";

export const PersonsForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleName = (e) => {
    const nameInput = e.target.value;
    setName(nameInput);
  };

  const handleNumber = (e) => {
    const numberInput = e.target.value;
    setNumber(numberInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      name: name,
      number: number,
    };
    onAdd(newPerson);
    setName("");
    setNumber("");
  };

  return (
    <section>
      <h2>Add a New</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={name} onChange={handleName} />
        </div>
        <div>
          number: <input value={number} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </section>
  );
};
