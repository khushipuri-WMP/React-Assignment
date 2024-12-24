// Dropdown.js
import React from "react";

function Dropdown({ label, options, selectedId, onChange }) {
  return (
    <div className="col-md-3 d-flex flex-column">
      <label className="h5 form-label text-white">{label}</label>
      <div className="text-dark">
        <select
          className="form-control mw-750"
          style={{ backgroundColor: "lightgray" }}
          value={selectedId}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">--Select {label}--</option>
          {options.map((option) => (
            <option value={option.id} key={option.id} className="bg-secondary">
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Dropdown;