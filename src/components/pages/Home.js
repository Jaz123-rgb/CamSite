import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Car from '../HomeMain/Careles'
import Map from '../HomeMain/Map'

function Home() {
  return (
    <>
      <HeroSection />
      <Cards/>
      <Car/>
      <Map/>
      <Footer />
      
    </>
  );
}

export default Home;
