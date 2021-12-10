import React from "react";

const PersonForm = ({
  addPerson,
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange,
}) => {
  return (
    <div>
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
    </div>
  );
};
export default PersonForm;
