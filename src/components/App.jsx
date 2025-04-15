// src/components/App.jsx
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import Footer from './Footer';
import '../style.css';

function App() {
  return (
    <>
      <Header />

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="projects">
          {/* ProjectSection gelecektir */}
        </section>

        <section id="contact">
          {/* ContactSection gelecektir */}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
