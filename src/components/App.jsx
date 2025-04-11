import React from 'react';
import '../styles/style.css'; // CSS dosyasını dahil ediyoruz
import Header from './Header';
import HeroSection from './HeroSection';
import Footer from './Footer';

export const App = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <Footer />
        </>
    );
};

export default App; // App bileşenini default export olarak dışa aktarıyoruz