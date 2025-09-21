import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="logo">
        <h1>AI Career Advisor</h1>
      </div>
      <nav className="main-nav">
        <ul>
          {/* You can keep these here for now or remove them */}
         
        </ul>
      </nav>
      <div className="auth-buttons">
        <Link to="/about"><button className="register-btn">About Us</button></Link>
        <Link to="/contact"><button className="login-btn">Contact</button></Link>
        <Link to="/register"><button className="register-btn">Register</button></Link>
        <Link to="/login"><button className="login-btn">Log in</button></Link>
      </div>
    </header>
  );
}

export default Header;