import '@fontsource/lily-script-one';
import './styles/home.css'
import Navbar from "./components/navbar";
import ProductCard from "./components/product-card";
import Contact from './components/contact';
import Footer from './components/footer';
import { Fade, Slide } from 'react-reveal';


function AboutUs() {
  return (
    <div className="relative bg-custom_background z-1 dark:bg-slate-900">
      <Navbar />
          
     
        <div className='about-wrapper relative w-[90%] h-[500px] my-[70px] mx-auto '>
          <div className='bg-circle  absolute left-[10px] top-[10px] h-[450px] w-[550px] rounded-[40%] bg-custom_primary_10'> </div>
         <Slide left> <div className='fir-image-con h-[345px] w-[330px] absolute left-[7px] top-[7px] overflow-hidden rounded-[10px]'><img className='w-[100%] h-[100%]' src={require("./assets/about-2758e5de75ac8bf1c6d1c82464ec7177.jpg")}/></div> </Slide>
         <Fade left delay={500}> <div className='sec-image-con h-[345px] w-[330px] absolute left-[250px] bottom-[7px] overflow-hidden rounded-[10px]'><img className='w-[100%] h-[100%]' src={require("./assets/about-e1c2c179e66b3db526235f5b03a7c268.jpg")}/></div> </Fade>

          <div className='about-writing absolute right-0 max-w-[600px] h-[500px] pl-[20px] flex flex-column justify-center'>
            <h2 className='text-[40px] text-left text-custom_primary  '>About Us</h2>
            <p className='text-[16px] text-custom_sec dark:text-slate-200 text-left' >Lorem ipsum, or lipsum as it is sometimes known, 
              is dummy text used in laying out print, graphic or web designs. 
              The passage is attributed to an unknown typesetter in the 15th century 
              who is thought to have scrambled parts of Cicero's 
              De Finibus Bonorum Malorum for use in a type specimen book. 
              It usually begins Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do iusmod tempor incididunt ut labore et dolore magna aliqua. 
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
              adipisci velit, sed quia non numquam eius modi tempora incidunt labore et dolore magnam aliquam quaerat voluptatem
            </p>
          </div>
          
        </div>

        <div className='about-foot-con mr-[40px]'>
          <span className='button signup inline-block p-[10px] w-[150px] rounded-[40px] font-[600]'>Sign up</span>
          <span className='text-slate-900 dark:text-slate-200'>Or</span>
          <span className='button login inline-block p-[10px] w-[150px] rounded-[40px] font-[600]'>Log in</span>
          <h3>pick your favorite recipe!</h3>
        </div>
          <div className='about-container'>
              <Footer />
            </div> 
          
         
      </div>
      
   
  );
}

export default AboutUs;
