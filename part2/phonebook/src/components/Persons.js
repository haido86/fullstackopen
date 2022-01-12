import React from "react";

const Persons = ({ persons, filter, handleDeletePerson }) => {
  return (
    <div>
      {persons
        .filter((person) => person.name.toLowerCase().includes(filter))
        .map((filterPerson) => (
          <p key={filterPerson.id}>
            {filterPerson.name} {filterPerson.number} {""}
            <button onClick={() => handleDeletePerson(filterPerson.id)}>
              delete
            </button>
          </p>
        ))}
    </div>
  );
};
export default Persons;
