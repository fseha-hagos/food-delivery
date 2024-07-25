import React from 'react';



import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function MyCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item>
      <div className="home-image-container relative h-[480px]  max-w-[95%] my-[5px] mx-auto rounded-[35px] flex flex-col justify-center">
      <h2 className='royal text-[50px] z-10 p-0 m-0'>ROYAL</h2>
            <h2 className='restorant text-[50px] text-white z-10 p-0 m-0'>RESTAURANT</h2>
            <p><span></span>Home Delivery<span></span></p>
           </div>
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="home-image-container relative h-[480px] max-w-[95%] my-[5px] mx-auto rounded-[35px] flex flex-col justify-center">
      <h2 className='royal text-[50px] z-10 p-0 m-0'>ROYAL</h2>
            <h2 className='restorant text-[50px] text-white z-10 p-0 m-0'>RESTAURANT</h2>
            <p><span></span>Home Delivery<span></span></p>
           </div>
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="home-image-container relative h-[480px] max-w-[95%] my-[5px] mx-auto rounded-[35px] flex flex-col justify-center">
      <h2 className='royal text-[50px] z-10 p-0 m-0'>ROYAL</h2>
            <h2 className='restorant text-[50px] text-white z-10 p-0 m-0'>RESTAURANT</h2>
            <p><span></span>Home Delivery<span></span></p>
           </div>
        <Carousel.Caption>
          
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;