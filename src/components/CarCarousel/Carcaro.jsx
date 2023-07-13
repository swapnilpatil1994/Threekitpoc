import React from 'react'
import { useState } from 'react';
import { CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import "./Carcaro.css"
function Carcaro() {
    
        // const [key, setKey] = useState('all');
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex) => {
          setIndex(selectedIndex);
        };
    
  return (
    <div clas className='wrapdiv'>
       
    <Carousel className="tabcenter" activeIndex={index} onSelect={handleSelect}>
        <CarouselItem>
        <img
          className="d-block custstylecar"
          src="./nobg1.png"
          alt="First slide"
        />
        </CarouselItem>
        <CarouselItem>
        <img
          className="d-block custstylecar"
          src="./nobg2.png"
          alt="First slide"
        />
        </CarouselItem>
        <CarouselItem>
        <img
          className="d-block custstylecar"
          src="./nobg3.png"
          alt="First slide"
        />
        </CarouselItem>
        <CarouselItem>
        <img
          className="d-block custstylecar"
          src="./nobg4.png"
          alt="First slide"
        />
        </CarouselItem>
       
    </Carousel>
    <div className='carcarousel'>
    <img src="./nobg1.png" width={"150px"} height={"100px"} className={`istyle ${index === 0 ? 'activecar' : ''}`} onClick={() => handleSelect(0)}/>
    <img  src="./nobg2.png"  width={"150px"} height={"100px"} className={`istyle ${index === 1 ? 'activecar' : ''}`}onClick={() => handleSelect(1)}/>
   <img  src="./nobg3.png"  width={"150px"} height={"100px"} className={`istyle ${index === 2 ? 'activecar' : ''}`} onClick={() => handleSelect(2)}/>
    <img src='./nobg4.png'  width={"150px"} height={"100px"} className={`istyle ${index === 3 ? 'activecar' : ''}`}  onClick={() => handleSelect(3)}/>
   
    {/* <img src="./g3.png"  width={"100px"} height={"100px"} onClick={() => handleSelect(3)}/>  */}
    </div>
    </div>
  )
}


export default Carcaro;