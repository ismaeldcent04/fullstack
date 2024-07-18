import { useState } from "react";
import { PersonsForm } from "./PersonsForm";
import { PersonNumbers } from "./PersonNumbers";
import axios from "axios";
import { Filter } from "./Filter";
import { useEffect } from "react";
import personService from "../services/personService";
import { Notification } from "./Notification";

export const Main = () => {
  const [persons, setPersons] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((data) => {
      setPersons(data);
    });
  }, []);

  const [filteredPersons, setFilteredPersons] = useState();

  const handleAddPerson = (newperson) => {
    const namePersonDuplicate = persons.find(
      (person) => person.name === newperson.name
    );

    if (namePersonDuplicate) {
      window.confirm(
        `${namePersonDuplicate.name} is already added to phonebook, replace the old number with a new one?`
      ) &&
        personService.update(namePersonDuplicate.id, newperson).then((data) => {
          setPersons(
            persons.map((person) => {
              return person.id !== namePersonDuplicate.id ? person : data;
            })
          );

          setSuccessMessage(
            `${namePersonDuplicate.name} information updated correctly.`
          );
          setTimeout(() => {
            setSuccessMessage(null);
          }, 5000);
        });
    } else {
      personService.create(newperson).then((data) => {
        setPersons(persons.concat(data));
        setSuccessMessage(`Added ${newperson.name}`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
      });
    }
  };

  const handleFilter = (filter) => {
    const filtered = persons.filter((person) =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredPersons(filtered);
  };

  const handleDeletePerson = (person) => {
    window.confirm(`Are you sure you want to delete ${person.name}`) &&
      personService
        .remove(person.id)
        .then((data) => {
          setPersons(persons.filter((p) => p.id !== person.id));
          setSuccessMessage(`${person.name} deleted correctly.`);
          setTimeout(() => {
            setSuccessMessage(null);
          }, 5000);
        })
        .catch((error) => {
          setErrorMessage(
            `Information of ${person.name} has already been removed from server`
          );
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
          setPersons(persons.filter((p) => p.id !== person.id));
        });
  };

  return (
    <main>
      <Notification
        successMessage={successMessage}
        errorMessage={errorMessage}
      />
      <Filter onSearch={handleFilter} />
      <PersonsForm onAdd={handleAddPerson} />
      {persons != null && (
        <PersonNumbers
          persons={!filteredPersons ? persons : filteredPersons}
          onDelete={handleDeletePerson}
        />
      )}
    </main>
  );
};
