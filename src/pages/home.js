import '@fontsource/lily-script-one';
import './styles/home.css'
import Navbar from "./components/navbar";
import ProductCard from "./components/product-card";
import Contact from './components/contact';
import About from './components/about';


function Home() {
  return (
    <div className="home-container">
     
     <span className='background-box'></span>
          <div className="header">
          <Navbar />
           <div className="home-image-container">
            <h2 className='royal'>ROYAL</h2>
            <h2 className='restorant'>RESTAURANT</h2>
            <p><span></span>Home Delivery<span></span></p>
           </div>
           </div>

          <div className="welcome-container">
              <div className='welcome-content-box'>
                <div className='welcome-content'>
                  <h2 className='welcome-header'>
                    Welcome
                  </h2>
                  <p>
                  <span></span>Welcome
    There are many variations of passages of Lorem Ipsum available, 
but the majority have suffered alteration in some form, by injected 
humour, or randomised words which don't look even slightly believable.There are many variations of passages of Lorem Ipsum availablethe majority have suffered alteration in some form, by injected or randomised words which don't look even slightl believable.
</p>
<div className='reserve-button'><span>Reserve table</span></div>
                </div>
              </div>

              <div className="welcome-showcase">
                <div className="welcome-showcase-image-1"></div>
                <div className="welcome-showcase-image-2"></div>
              </div>
           </div>

          <div className="wrapper-container">
           <p className='wrapper-title'><span></span>today’s special<span></span></p>
            <div className='row'>
              <div><ProductCard /></div>        
              <div><ProductCard /></div>              
              <div><ProductCard /></div>
            </div>
            <div className='row'>
              <div><ProductCard /></div>        
              <div><ProductCard /></div>              
              <div><ProductCard /></div>
            </div>
            <div className='discover-button'><span>Discover More!</span></div>
           </div>

          <div className='contact-container'>
           <Contact />
            </div> 
          <div className='about-container'>
              <About />
            </div> 
          
         
      </div>
      
   
  );
}

export default Home;
