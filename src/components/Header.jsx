// src/components/Header.jsx
import React from 'react';
import '../styles/Header.css'; // Header bileşeni için özel stiller

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="header-logo"></a>
      <nav className="header-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
