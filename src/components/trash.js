import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProfilePopup from './ProfilePopup'; // Import the ProfilePopup component

const Navbar = () => {
  let location = useLocation();
  const [showProfilePopup, setShowProfilePopup] = useState(false); // State to toggle profile pop-up

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload(); // Optional: Reload the page after logout to update the Navbar
  };

  const centeredDivStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const isLoggedIn = localStorage.getItem('token'); // Check if the user is logged in

  return (
    <div>
      <nav className="navbar navbar-expand-lg p-3 mb-2" style={{ backgroundColor: '#b7ffe4', color: 'black' }}>
        <div className="container-fluid">
          <Link className="navbar-brand mb-0 h1" style={{ fontSize: '27px' }} to="/">
            NoteMe
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/' && 'active'}`}
                  style={{ color: 'black', marginInline: '30px', fontSize: '18px', marginTop: '5px', fontWeight: '400' }}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/about' && 'active'}`}
                  style={{ marginInline: '30px', marginTop: '5px', fontSize: '18px', color: 'black', fontWeight: '400' }}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>

            {/* Conditionally render the Profile button */}
            {isLoggedIn ? (
              <button onClick={() => setShowProfilePopup(!showProfilePopup)} className="btn btn-primary" style={{ backgroundColor: 'black', color: 'white', border: 'black' }}>
                Profile
              </button>
            ) : (
              <form className="d-flex">
                <Link className="btn btn-primary mx-2" style={{ backgroundColor: 'black', color: 'white', border: 'black' }} to="/login" role="button">
                  Login
                </Link>
                <Link className="btn btn-primary" style={{ backgroundColor: 'black', color: 'white', border: 'black' }} to="/signup" role="button">
                  Signup
                </Link>
              </form>
            )}
          </div>
        </div>
      </nav>

      {/* Conditionally render the profile pop-up */}
      {isLoggedIn && showProfilePopup && <ProfilePopup />}
    </div>
  );
};

export default Navbar;
