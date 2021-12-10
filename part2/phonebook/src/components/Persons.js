import React from "react";

const Persons = ({ persons, filter }) => {
  return (
    <div>
      {persons
        .filter((person) => person.name.toLowerCase().includes(filter))
        .map((filterPerson) => (
          <p key={filterPerson.id}>
            {filterPerson.name} {filterPerson.number}
          </p>
        ))}
    </div>
  );
};
export default Persons;
