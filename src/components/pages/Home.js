import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Example from '../HomeMain/Careles'

function Home() {
  return (
    <>
      <HeroSection />
      <Cards/>
      <Example/>
      <Footer />
      
    </>
  );
}

export default Home;
