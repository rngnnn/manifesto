import React from 'react';
import '../styles/HeroSection.css'; // HeroSection bileşeni için özel stil dosyası



const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1>Welcome to My Creative Space</h1>
      <p>I craft ideas into digital experiences.</p>
      <button className="cta-button">Explore More</button>
    </section>
  );
};

export default HeroSection;
