import '@fontsource/lily-script-one';
import './styles/home.css'
import Navbar from "./components/navbar";
import ProductCard from "./components/product-card";
import Contact from './components/contact';
import About from './components/about';
import { Fade } from 'react-reveal';
import { useEffect, useState } from 'react';
import MyCarousel from './components/my-carousel';



function Home() {


  return (
        <div className='relative bg-custom_background z-1'>

          <div className="w-full h-screen mx-auto bg-pinkSoft">
          <Navbar />
          <div className='h-[490px] w-[100%]'>

          <MyCarousel />
          </div>
          
           </div>


          <Fade up> 
          <div className="welcome-container relative w-[100%]   h-[1000px] md:h-[500px]  overflow-hidden my-[50px] md:my-[80px] mx-auto">
              <div className='bg-custom_primary_25 w-[95%]  h-[500px]  mx-[2%]  lg:w-[70%]   overflow-hidden rounded-tr-[50px] rounded-bl-[50px] float-left'>
                <div className='welcome-content md:w-[50%] lg:w-[75%]  mt-[36px] ml-[30px] md:ml-[5px] lg:ml-[30px]'>
                   <Fade up> 
                  <h2 className='welcome-header text-custom_primary text-[50px] text-left'>
                    Welcome
                  </h2>
                    </Fade>
                    <Fade up> 
                  <p className='text-left text-[18px] font-normal px-[5px]'>
                  <span className='pl-8'></span>Welcome
    There are many variations of passages of Lorem Ipsum available, 
but the majority have suffered alteration in some form, by injected 
humour, or randomised words which don't look even slightly believable.There are many variations of passages of Lorem Ipsum availablethe majority have suffered alteration in some form, by injected or randomised words which don't look even slightl believable.
</p>   </Fade>
<div className='reserve-button my-[10px] mx-auto mt-[60px] w-[220px] p-[15px] rounded-[12px] font-[600] text-[20px]'>Reserve table</div>
                </div>
              </div>

              <Fade right>
              <div className="welcome-showcase absolute mx-auto top-[495px] left-2 md:left-[50%] md:top-[0px] lg:left-[58%] lg:top-[20px] w-[98%] md:w-[50%] md:w-[400px] lg:w-[530px] h-[430px]">
              <Fade right delay={3} duration={1000} ><div className="welcome-showcase-image-1 absolute top-0 left-0 w-[60%] md:w-[80%] h-[380px] rounded-[16px]"></div></Fade>
              <Fade right delay={7} duration={1000} > <div className="welcome-showcase-image-2  absolute bottom-0 right-2  md:right-0  lg:right-2 w-[60%] md:w-[70%]  h-[380px] rounded-[16px]"></div></Fade>
              </div>
              </Fade>
           </div>
           </Fade>


<Fade up> 
          <div className="wrapper-container mx-[20px] md:mx-[90px] my-0 z-100"> 
 
           <p className='wrapper-title text-[35px]  flex items-center justify-center'><span className='inline-block my-0 mx-[10px] md:mx-[28px] w-[40px] h-[3px] border-t-[1px] border-solid border-black z-1'></span>today’s special<span className='inline-block my-0 mx-[10px] md:mx-[28px] w-[40px] h-[3px] border-t-[1px] border-solid border-black z-1'></span></p>
          
            <div className='relative grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:gap-[40px] mt-[50px] md:mt-[100px]  z-3'>
              <div><ProductCard /></div>        
              <div><ProductCard /></div>              
              <div><ProductCard /></div>
              <div><ProductCard /></div>        
              <div><ProductCard /></div>              
              <div><ProductCard /></div>
            </div>
            
            <div className='discover-button my-[10px] mt-[35px] mx-auto w-[180px] p-[7px]  rounded-[50px]'><span className='font-[700]'>Discover More!</span></div>
           </div> 
           </Fade>
           <Fade up> 
          <div className='contact-container my-[60px] mx-[auto] w-[94%]'>
           <Contact />
            </div> 
            </Fade>
          <div className='about-container'>
              <About />
            </div> 
          
         
      </div>
      
   
  );
 }
export default Home;
