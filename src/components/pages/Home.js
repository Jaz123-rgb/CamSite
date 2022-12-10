import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Car from '../HomeMain/Careles'

function Home() {
  return (
    <>
      <HeroSection />
      <Cards/>
      <Car/>
      <Footer />
      
    </>
  );
}

export default Home;
