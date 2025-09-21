// frontend/src/components/Footer.jsx

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; 2025 AI Career Advisor. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about-us">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;