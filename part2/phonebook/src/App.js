import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);
  console.log("render", persons.length, "persons");

  const addFilter = (event) => {
    event.preventDefault();
    setFilter("");
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const isDuplicate =
      persons.find((person) => person.name === newName) !== undefined;

    if (isDuplicate) {
      window.alert(`${newName} is already added to phonebook`);
      return;
    }

    if (newName === "") {
      window.alert(`Name cannot be empty`);
      return;
    }

    if (newNumber === "") {
      window.alert(`Phone number cannot be empty`);
      return;
    }

    const person = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    setPersons(persons.concat(person));
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Phonebook!</h2>
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
      <Persons persons={persons} filter={filter} />
    </div>
  );
};

export default App;
