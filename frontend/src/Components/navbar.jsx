import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Assets/CSS/navbar.css';
import logo from '../Assets/Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/'); 
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <Link to="/">TranspoMaster</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/tracking">Tracking</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/shipments">Shipments</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="auth-links">
        {isLoggedIn ? (
          <div className="profile-icon" onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faUserCircle} size="2x" />
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/account">Account</Link>
                <Link to="/" onClick={handleLogout}>Logout</Link>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" onClick={handleLogin}>Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
