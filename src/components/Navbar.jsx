
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Navbar component
function Navbar() {
  // State to control navbar collapse
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle navbar collapse state
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Function to handle click on nav items (close navbar after selection)
  const closeNavbar = () => {
    setIsNavOpen(false);
  };

  return (
    // Navbar container with Bootstrap classes for styling
    <nav className="navbar navbar-expand-lg primary-card-color">
      <div className="container-fluid">
        <a className="navbar-brand fs-3 fw-bolder text-white ps-5" href="#">
          Task-Website .
        </a>
        
        {/* Button for toggling the navbar on smaller screens */}
        <button
          className="navbar-toggler text-white"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarTogglerDemo02"
          aria-expanded={isNavOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          {/* menu icon */}
          <i className="bi bi-list fs-2"></i>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-center ${isNavOpen ? "show" : ""}`}
          id="navbarTogglerDemo02"
        >
          {/* Unordered list for navigation links */}
          <ul className="navbar-nav mb-0 mb-lg-0">
            {/* Home page link */}
            <li className="nav-item mx-3">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active fs-5 text-white" : "nav-link fs-5 text-white"
                }
                to="/"
                onClick={closeNavbar} // Close navbar on click
              >
                Home
              </NavLink>
            </li>

            {/* To-Do-List page link */}
            <li className="nav-item mx-3">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active fs-5 text-white" : "nav-link fs-5 text-white"
                }
                to="/Todo"
                onClick={closeNavbar} // Close navbar on click
              >
                To-Do-List
              </NavLink>
            </li>

            {/* Country Selector page link */}
            <li className="nav-item mx-3">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active fs-5 text-white" : "nav-link fs-5 text-white"
                }
                to="/CountrySelect"
                onClick={closeNavbar} // Close navbar on click
              >
                Country-Selector
              </NavLink>
            </li>

            {/* Post Selector page link */}
            <li className="nav-item mx-3">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active fs-5 text-white" : "nav-link fs-5 text-white"
                }
                to="/PostSelector"
                onClick={closeNavbar} // Close navbar on click
              >
                Post-Selector
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
