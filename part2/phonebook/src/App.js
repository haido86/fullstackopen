import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    const isDuplicate =
      persons.find((person) => person.name === newName) !== undefined;

    if (isDuplicate) {
      window.alert(`${newName} is already added to phonebook`);

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

  const addSearch = (event) => {
    event.preventDefault();
    setSearch("");
  };

  function handleNameChange(event) {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Phonebook</h2>
      <p>filter shown with</p>
      <form onSubmit={addSearch}>
        <div>
          <input value={search} onChange={handleSearchChange} />
        </div>
      </form>

      <h2> add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          <p>
            name: <input value={newName} onChange={handleNameChange} />
          </p>
          <p>
            number: <input value={newNumber} onChange={handleNumberChange} />
          </p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons
          .filter((person) => person.name.toLowerCase().includes(search))
          .map((filterPerson) => (
            <p key={filterPerson.id}>
              {filterPerson.name} {filterPerson.number}
            </p>
          ))}
      </div>
    </div>
  );
};

export default App;