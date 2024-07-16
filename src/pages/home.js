import '@fontsource/lily-script-one';
import './styles/home.css'
import Navbar from "./components/navbar";
import ProductCard from "./components/product-card";


function Home() {
  return (
    <div className="home-container">
     
        <div className="header">
          <Navbar />
           <div className="home-image-container">
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
           <p>today’s special</p>
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
           </div>
      </div>
      
   
  );
}

export default Home;
