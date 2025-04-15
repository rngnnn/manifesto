// src/components/App.jsx
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import Footer from './Footer';
import './'; // Uygulama genel stilleri
function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <h2>About</h2>
          <p>This is the About section.</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <p>This is the Projects section.</p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>This is the Contact section.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
