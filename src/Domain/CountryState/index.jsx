import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import countryData from "./Country-State-data.json"; // JSON file containing country and state data
import Dropdown from "../../components/Dropdown"; // Import Dropdown component for selecting countries and states
import { ERROR_MESSAGES } from "../../utils/constant"; // Import error messages constants

function CountryStateSelector() {
  // State hooks to manage countries, states, selected country, selected state, and error messages
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [selectedStateId, setSelectedStateId] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({ id: "", name: "" });
  const [selectedState, setSelectedState] = useState({ id: "", name: "" });
  const [error, setError] = useState(""); // For storing error messages

  // useEffect hook to populate countries from the JSON data when the component mounts
  useEffect(() => {
    setCountries(
      countryData.map((country) => ({
        id: country.country_id,
        name: country.country_name,
      }))
    );
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  // Handle the country change event
  const handleCountryChange = (countryId) => {
    // Find the selected country data by its ID
    const selectedCountry = countryData.find((c) => c.country_id === countryId);
    
    // Update states based on the selected country
    setStates(
      selectedCountry?.states.map((state) => ({
        id: state.state_id,
        name: state.state_name,
      })) || [] // If no states, set empty array
    );
    
    // Update the selected country
    setSelectedCountryId(countryId);
    setSelectedCountry({ id: countryId, name: selectedCountry?.country_name || "" });
    setSelectedStateId(""); // Reset the selected state
    setError(""); // Clear any error messages
  };

  // Handle the state change event
  const handleStateChange = (stateId) => {
    // Find the selected state data by its ID
    const state = states.find((s) => s.id === stateId);
    if (state) {
      setSelectedStateId(stateId);
      setSelectedState({ id: stateId, name: state.name }); // Ensure key `name` exists in `states`
      setError("");
    }
  };
  

  // Handle the form submission
  const handleFormSubmit = (e) => {
    // Check if the country is selected, if not show an error and prevent form submission
    if (!selectedCountryId) {
      e.preventDefault(); // Prevent navigation if country is not selected
      setError(ERROR_MESSAGES.SELECT_COUNTRY); // Set error message
      return;
    }
    
    // Check if the state is selected, if not show an error and prevent form submission
    if (!selectedStateId) {
      e.preventDefault(); // Prevent navigation if state is not selected
      setError(ERROR_MESSAGES.SELECT_STATE); // Set error message
      return;
    }
    
    setError(""); // Clear any existing errors if everything is valid
  };

  return (
    <div className="d-flex vw-100 vh-100 justify-content-center align-items-center">
      <div className="d-flex flex-column w-55 mx-auto border shadow-lg px-8 pt-5 rounded-4 primary-card-color">
        <p className="text-center mb-4 h2 p-2 text-white">Select Country and State</p>
        <form
          className="row g-3 d-flex flex-column-center gap-3 align-items-center justify-content-center mb-4 p-3"
          onSubmit={handleFormSubmit} // Trigger form validation and submission logic
        >
          {/* Dropdown for selecting country */}
          <Dropdown
            label="Country"
            options={countries}
            selectedId={selectedCountryId}
            onChange={handleCountryChange} // Handle country change
          />
          
          {/* Dropdown for selecting state */}
          <Dropdown
            label="State"
            options={states}
            selectedId={selectedStateId}
            onChange={handleStateChange} // Handle state change
          />
          
          <div className="col-md- d-flex justify-content-center mt-4">
            {/* Submit button, which triggers the form validation and navigation */}
            <Link
              to="/data" // Redirects to /data route with selected country and state data
              state={{
                country: selectedCountry.name,
                state: selectedState.name,
              }}
              className="btn btn-success"
              onClick={(e) => handleFormSubmit(e)} // Trigger form validation before navigation
            >
              Submit
            </Link>
          </div>
          
          {/* Display error message if any */}
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

export default CountryStateSelector;
