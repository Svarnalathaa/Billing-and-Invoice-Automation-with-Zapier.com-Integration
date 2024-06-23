import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ user }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        {user && <li><Link to="/dashboard">Dashboard</Link></li>}
        {user && <li><Link to="/profile">Profile</Link></li>}
      </ul>
    </nav>
  );
};

export default Navbar;
