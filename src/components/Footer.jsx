// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.  
        <br />
        <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer">GitHub</a> |  
        <a href="mailto:you@example.com"> Contact</a>
      </p>
    </footer>
  );
};

export default Footer;
