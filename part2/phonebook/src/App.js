import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personsInfo from "./services/personsInfo";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personsInfo.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addFilter = (event) => {
    event.preventDefault();
    setFilter("");
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (newName === "") {
      window.alert(`Name cannot be empty`);
      return;
    }

    if (newNumber === "") {
      window.alert(`Phone number cannot be empty`);
      return;
    }

    const personDuplicate = persons.find(
      (person) =>
        person.name.trim().toLowerCase() === newName.trim().toLowerCase()
    );

    if (personDuplicate) {
      window.alert(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );
      {
        const changedPerson = {
          ...personDuplicate,
          number: newNumber,
        };

        personsInfo
          .update(personDuplicate.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== personDuplicate.id ? person : returnedPerson
              )
            );
            setErrorMessage(`${newName}'s phone number is changed`);
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
          })
          .catch((error) => {
            console.log("error", error);
            setErrorMessage(
              `Information of ${newName} has already been removed from server`
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
            setPersons(
              persons.filter((person) => person.id !== personDuplicate.id)
            );
          });

        setNewName("");
        setNewNumber("");
      }
      return;
    }

    const person = {
      name: newName,
      number: newNumber,
      id: Math.random(),
    };

    personsInfo.create(person).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setErrorMessage(`Added ${person.name}`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    });

    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleDeletePerson = (id) => {
    const deletedPerson = persons.find((person) => person.id === id);

    if (window.confirm(`Delete ${deletedPerson.name}?`)) {
      personsInfo.eliminate(id).then((returnedPerson) => {
        setPersons(persons.filter((p) => p.id !== id));
      });
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Phonebook!</h2>
      <Notification message={errorMessage} />
      <Filter
        filter={filter}
        setFilter={setFilter}
        addFilter={addFilter}
        handleFilterChange={handleFilterChange}
      />
      <h2> add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filter={filter}
        handleDeletePerson={handleDeletePerson}
      />
    </div>
  );
};

export default App;
