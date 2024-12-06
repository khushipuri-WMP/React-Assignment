import React, { useState, useEffect } from 'react';
import countrydata from './Country-State-data.json'; 
import CountryDropdown from './CountryDropdown'; 
import StateDropdown from './StateDropdown'; 
import { Link } from 'react-router-dom'; // For navigation

// Main component for selecting a country and state
function CountryState() {

  // Defined the states here
  const [countries, setCountries] = useState([]);   
  const [states, setStates] = useState([]);      
  const [selectedCountry, setSelectedCountry] = useState({ id: '', name: '' });     
  const [selectedState, setSelectedState] = useState({ id: '', name: '' });        
  const [error, setError] = useState('');     

  // Loading the country data when something is changed  
  useEffect(() => {
    setCountries(countrydata);
  }, []);

  // Handle changes when a country is selected
  const handleCountryChange = (countryId) => {
    const country = countrydata.find((c) => c.country_id === countryId);
    setStates(country?.states || []);
    setSelectedCountry({ id: countryId, name: country?.country_name || '' });
    setError('');
  };

  // Handle changes when a state is selected
  const handleStateChange = (stateId) => {
    const state = states.find((s) => s.state_id === stateId);
    setSelectedState({ id: stateId, name: state?.state_name || '' });
    setError('');
  };

  // Handle form submission 
  const handleFormSubmit = (e) => {
    if (!selectedCountry.id) {
      e.preventDefault(); // To Prevent navigation
      setError('Please select a country.');
      return;
    }
    if (!selectedState.id) {
      e.preventDefault(); // To Prevent navigation
      setError('Please select a state.');
      return;
    }
    // Clearing error if both country and state are selected
    setError('');
  };

  return (
    // Main container for layout
    <div className="d-flex vw-90 vh-100 justify-content-center align-items-center">
      <div
        className="d-flex flex-column w-55 mx-auto ms-3 me-3 border shadow-lg px-8 pt-5 rounded-4 primary-card-color"
      >
        {/* Heading of the pagfe */}
        <p className="text-center mb-4 h2 p-2 text-white">Select Country and State</p>

        {/* Form for country and state selection */}
        <form className="row g-3 d-flex flex-column-center gap-3 justify-content-center mb-4 p-3" onSubmit={handleFormSubmit}>
          {/* Dropdown for country */}
          <CountryDropdown
            countries={countries} // List of countries
            selectedCountryId={selectedCountry.id} // Selected country ID
            onCountryChange={handleCountryChange} // Function to handle country selection
          />

          {/* Dropdown for state */}
          <StateDropdown
            states={states} // List of states for the selected country
            selectedStateId={selectedState.id} // Selected state ID
            onStateChange={handleStateChange} // Function to handle state selection
          />

          {/* button for dropdown */}
          <div className="col-md- d-flex justify-content-center mt-4">
            <Link
              to="/Data" // Navigating to the Data page on submission
              state={{ country: selectedCountry.name, state: selectedState.name }} // Pass selected data to the next page
              className="btn btn-success"
              onClick={(e) => handleFormSubmit(e)} // Validating before navigating
            >
              Submit
            </Link>
          </div>

          {/* Display validation errors, if any */}
          {error && (
            <div className="text-danger text-center mb-3">
              <strong>{error}</strong>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default CountryState;

