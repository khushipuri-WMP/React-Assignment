import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Hooks for handling routing

// Component to display selected country and state information
function Data() {
  const location = useLocation(); // Hook to access the location and passed state
  const navigate = useNavigate(); // Hook to navigate between routes

  // Destructure country and state from the location's state, with default values if not available
  const { country, state } = location.state || { country: '', state: '' };

  return (
    // Main container for the page layout
    <div className="d-flex vw-90 vh-100 justify-content-center align-items-center">
      <div
        className="d-flex w-40 flex-column justify-content-center mx-auto ms-2 me-2 border shadow-lg px-8 pt-5 rounded-4 primary-card-color"
      >
        {/* Heading of the page */}
        <h2 className="text-center mb-4 h2 p-3 text-white">Selected Country and State</h2>
        <p className="text-center mb-2 h5 text-white"> 
          <strong>Country:</strong> {country || 'None'} 
        </p>
        <p className="text-center mb-2 h5 text-white">
          <strong>State:</strong> {state || 'None'} 
        </p>

        {/* Back button to navigate to the previous page */}
        <div className="d-flex justify-content-center align-items-center mt-4">
          <button
            className="btn btn-success mb-4"
            onClick={() => navigate(-1)} // Go back to the previous page
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Data;

