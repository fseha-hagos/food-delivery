import '@fontsource/lily-script-one';
import './styles/home.css'
import Navbar from "./components/navbar";
import ProductCard from "./components/product-card";
import Contact from './components/contact';
import About from './components/about';

function OrderOnline(props) {
    return (
        <div  className='order-online'> 
        <Navbar />
            
            <div className='order-online-wrapper'>
                <div className='background-pizza'></div>
                <div className='order-online-wrapper-left'>
                    <h2>Royal</h2>
                    <h3>Home Delivery</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua</p>
                    <span className='button choose-recipe'>Choose recipe</span>
                </div>


                <div className='order-online-wrapper-right'>
                    <div className='bike-container'>
                        
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
            </div>
            <div className='about-container'>
              <About />
            </div> 
        </div>
        
    );
}

export default OrderOnline;