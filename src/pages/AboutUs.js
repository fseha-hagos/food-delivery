import '@fontsource/lily-script-one';
import './styles/home.css'
import Navbar from "./components/navbar";
import ProductCard from "./components/product-card";
import Contact from './components/contact';
import About from './components/about';


function AboutUs() {
  return (
    <div className="home-container">
      <Navbar />
          
     
        <div className='about-wrapper'>
          <div className='bg-circle'> </div>
          <div className='fir-image-con'><img style={{width:"100%", height:"100%"}} src={require("./assets/about-2758e5de75ac8bf1c6d1c82464ec7177.jpg")}/></div>
          <div className='sec-image-con'><img style={{width:"100%", height:"100%"}} src={require("./assets/about-e1c2c179e66b3db526235f5b03a7c268.jpg")}/></div>

          <div className='about-writing'>
            <h2>About Us</h2>
            <p>Lorem ipsum, or lipsum as it is sometimes known, 
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

        <div className='about-foot-con'>
          <span className='button signup'>Sign up</span>
          <span className=''>Or</span>
          <span className='button login'>Log in</span>
          <h3>pick your favorite recipe!</h3>
        </div>
          <div className='about-container'>
              <About />
            </div> 
          
         
      </div>
      
   
  );
}

export default AboutUs;
