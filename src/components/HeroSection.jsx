import React from 'react';
import '../styles/HeroSection.css'; // CSS dosyasını dahil ediyoruz

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Manifesto</h1>
        <p>Experience the beauty of summer all year round.</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
}

export default HeroSection;