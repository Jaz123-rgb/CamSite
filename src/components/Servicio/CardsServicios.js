import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Checa nuestros precios !!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Cardimg-1.png'
              text='kit de camaras de 720p 1 microfono con cualquier kit que escogas'
              label='OFERTA'
              path='/services'
            />
            <CardItem
              src='images/Cardimg-1.png'
              text='kit de camaras de 720p 1 microfono con cualquier kit que escogas'
              label='OFERTA'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/Cardimg-1.png'
              text='kit de camaras de 720p 1 microfono con cualquier kit que escogas  Cruise'
              label='OFERTA'
              path='/services'
            />
            <CardItem
              src='images/Cardimg-1.png'
              text='kit de camaras de 720p 1 microfono con cualquier kit que escogas  Cruise'
              label='OFERTA'
              path='/services'
            />  
            <CardItem
              src='images/Cardimg-1.png'
              text='kit de camaras de 720p 1 microfono con cualquier kit que escogas  Cruise'
              label='OFERTA'
              path='/services'
            /> 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
