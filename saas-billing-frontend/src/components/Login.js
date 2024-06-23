import React from 'react';
import './Login.css';

const Login = ({ setUser }) => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/google';
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <button className="login-button" onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
