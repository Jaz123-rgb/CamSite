import React from 'react';
import './App.css';
import { Button } from '../Button';
import './SlideServicio.css';

function SideSer() {
  return (
    <div className='hero-container'>
      <video src='/videos/videoServicio.mp4' autoPlay loop muted />
      <h1>EL MEJOR TRATO<br></br> AL CLIENTE</h1>
      <p>Que estas esperando para contratarnos?</p>
      <div className='hero-btns'>
        
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          CAMARAS DEMO <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default SideSer;
