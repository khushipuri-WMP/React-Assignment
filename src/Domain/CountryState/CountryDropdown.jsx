import React from 'react';

// A dropdown component for selecting a country
function CountryDropdown({ countries, selectedCountryId, onCountryChange }) {
  return (
    // A container div with Bootstrap classes for layout
    <div className="col-md-3 d-flex flex-column">
      {/* Label of the dropdown */}
      <label className="h5 form-label text-white">Country</label>

      {/* container for Dropdown*/}
      <div className="text-dark">
        {/* Creating the Dropdown menu */}
        <select
          name="country" 
          className="form-control mw-75" 
          style={{ backgroundColor: 'lightgray' }} 
          value={selectedCountryId} 
          onChange={(e) => onCountryChange(e.target.value)} 
        >
          {/* Default option for prompting the user to select a country */}
          <option value="">--Select Country--</option>
          
          {/* Dynamically generating options for each country */}
          {countries.map((country) => (
            <option 
              value={country.country_id} 
              key={country.country_id} 
              className="bg-secondary" 
            >
              {/* For Displaying the country name */}
              {country.country_name} 
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CountryDropdown;
