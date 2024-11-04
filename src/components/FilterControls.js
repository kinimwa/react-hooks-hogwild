import React from 'react';

function FilterControls({ onGreasedToggle, onSortChange }) {
  return (
    <div className="filter-controls">
      <label>
        <input type="checkbox" onChange={onGreasedToggle} />
        Show Greased Only
      </label>
      <label>
        Sort By:
        <select onChange={(e) => onSortChange(e.target.value)}>
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
    </div>
  );
}

export  default FilterControls;