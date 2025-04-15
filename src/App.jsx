import React from 'react';
import './style.css'; // Genel stiller
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      {/* Buraya ileride About, Projects gibi bölümler eklersin */}
      <Footer />
    </>
  );
}

export default App;
