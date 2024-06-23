import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to the SaaS Billing Platform</h2>
      <p>Manage your billing and usage details efficiently.</p>
      <Link to="/login">
        <button className="home-login-button">Login with Google</button>
      </Link>
    </div>
  );
};

export default Home;
