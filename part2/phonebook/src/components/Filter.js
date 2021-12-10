import React from "react";

const Filter = ({ filter, setFilter, addFilter, handleFilterChange }) => {
  return (
    <div>
      <p>filter shown with</p>
      <form onSubmit={addFilter}>
        <div>
          <input value={filter} onChange={handleFilterChange} />
        </div>
      </form>
    </div>
  );
};
export default Filter;
