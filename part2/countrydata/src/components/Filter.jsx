import { useState } from "react";

export const Filter = ({ onSearch }) => {
  const handleInput = (e) => {
    onSearch(e.target.value);
  };
  return (
    <section>
      <label>Find countries</label>
      <input type="text" onChange={handleInput} />
    </section>
  );
};
