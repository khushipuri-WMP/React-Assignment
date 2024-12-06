import React from 'react';

// A dropdown component for selecting a state
function StateDropdown({ states, selectedStateId, onStateChange }) {
  return (
    // A container div with Bootstrap classes for layout
    <div className="col-md-3 d-flex flex-column">
      {/* Label of the dropdown */}
      <label className="h5 form-label text-white">State</label>

      {/* Container for Dropdown */}
      <div className="text-dark">
        {/* Creating the Dropdown Menu */}
        <select
          name="state"
          className="form-control mw-75"
          style={{ backgroundColor: 'lightgray' }}
          value={selectedStateId}
          onChange={(e) => onStateChange(e.target.value)}
        >
          {/* Default optios for promting thee user to select a country */}
          <option value="">--Select State--</option>

          {/* Dynamically generating options for each country */}
          {states.map((state) => (
            <option value={state.state_id} key={state.state_id} className="bg-secondary">
              {/* For Displaying the state name */}
              {state.state_name}  
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default StateDropdown;
