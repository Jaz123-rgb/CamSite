import React from "react";
import Carousel, { consts } from 'react-elastic-carousel';
import Item from "./item";
import "./Carele.css";
import car from './car.jpg'

const breakPoints = [
  { width: 1, itemsToShow: 1, },
  { width: 550, itemsToShow: 2 }, 
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Car() {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "bl", backgroundColor: "white" }}>Example to setup your carousel in react</h1>
      <div className="Car">
        <Carousel itemPosition={consts.START} itemsToShow={2}enableAutoPlay autoPlaySpeed={1500} >
          <Item maxWidth="100%"><img src={require(`./2-img.jpg`)}/></Item>
          <Item maxWidth="100%"><img src={require(`./2-img.jpg`)}/></Item>
          <Item maxWidth="100%"><img src={require(`./test.png`)}/></Item>
          <Item></Item> 
          <Item><img src={require(`./car.jpg`)}/></Item>  
          <Item>Four</Item>
          
        </Carousel>
      </div>
    </>
  );
}
export default Car;