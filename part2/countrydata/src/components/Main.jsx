import { useState } from "react";
import { Filter } from "./Filter";
import { useEffect } from "react";
import countryService from "../services/countryService";
import { CountryList } from "./CountryList";

export const Main = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState(null);
  useEffect(() => {
    countryService.getAll().then((data) => {
      search != null
        ? setCountries(
            data.filter((country) => country.name.common.includes(search))
          )
        : setCountries(data);
    });
  }, [search]);

  const handleSearch = (search) => {
    setSearch(search);
  };

  return (
    <main>
      <Filter onSearch={handleSearch} />
      <CountryList countries={countries} />
    </main>
  );
};
