import React from "react";
import Carousel, { consts } from 'react-elastic-carousel';
import Item from "./item";
import "./Carele.css";


const breakPoints = [
  { width: 1, itemsToShow: 1, },
  { width: 550, itemsToShow: 2 }, 
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Car() {
  return (
    <>
  
      <div className="Car">
        <Carousel itemPosition={consts.START} itemsToShow={1}enableAutoPlay autoPlaySpeed={2000} >
          <Item id="img1"></Item>
          <Item id="img2"></Item>
          <Item id="img3"></Item>
          <Item id="img4"></Item> 
          <Item id="img5"></Item>  
          <Item id="img6"></Item>
          
        </Carousel>
      </div>
    </>
  );
}
export default Car; 