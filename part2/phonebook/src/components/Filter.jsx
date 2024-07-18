import { useState } from "react";

export const Filter = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
    setSearch(e.target.value);
  };

  const [search, setSearch] = useState("");
  return (
    <section>
      <h2>Search</h2>
      <label htmlFor="search-filter">
        Filter Shown with{" "}
        <input
          value={search}
          type="text"
          id="search-filter"
          onChange={handleSearch}
        />
      </label>
    </section>
  );
};
