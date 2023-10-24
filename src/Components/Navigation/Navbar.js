import React from 'react';
import { FileEarmarkTextFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file

function NavBar() {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-light p-0 m-0">
        <div className="container-fluid">
          <div className="navbar-brand d-flex align-items-center">
            <div className="me-3 mb-2">
              <FileEarmarkTextFill />
            </div>
            <div>Enkay Resumes</div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <div className="flex-grow-1"></div>
            <div className="navbar-nav ms-5">
              <li className="nav-item">
                <Link to="/myresume" className="nav-link active me-4">
                  My Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active">
                  About Us
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
