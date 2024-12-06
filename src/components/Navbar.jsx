
import React from "react";
import { Link } from "react-router-dom";

// Navbar component
function Navbar() {
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
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* menu icon */}
          <i className="bi bi-list fs-2"></i>
        </button>

        <div className="collapse navbar-collapse justify-content-center m-left" id="navbarTogglerDemo02">
          {/* Unordered list for navigation links */}
          <ul className="navbar-nav mb-0 mb-lg-0">
            {/* Home page link */}
            <li className="nav-item mx-3">
              <Link className="nav-link active fs-5 text-white" aria-current="page" to='/'>
                Home
              </Link>
            </li>

            {/* To-Do-List page link */}
            <li className="nav-item mx-3">
              <Link className="nav-link active fs-5 text-white" aria-current="page" to='/Todo'>
                To-Do-List
              </Link>
            </li>

            {/* Country Selector page link */}
            <li className="nav-item mx-3">
              <Link className="nav-link active fs-5 text-white" aria-current="page" to='/CountrySelect'>
                Country-Selector
              </Link>
            </li>

            {/* Post Selector page link */}
            <li className="nav-item mx-3">
              <Link className="nav-link active fs-5 text-white" aria-current="page" to='/Post'>
                Post-Selector
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
