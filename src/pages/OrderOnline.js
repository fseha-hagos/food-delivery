import '@fontsource/lily-script-one';
import './styles/home.css'
import Navbar from "./components/navbar";
import ProductCard from "./components/product-card";
import Contact from './components/contact';
import About from './components/about';
import { Fade, Zoom } from 'react-reveal';

function OrderOnline(props) {
    return (
        <div  className='order-online relative w-[100%] min-h-[100vh]'> 
        <Navbar />
            
            <div className='order-online-wrapper h-[700px] w-[100%] mt-[90px] flex relative'>
                <div className='background-pizza absolute w-[300px] h-[300px] left-[-150px] bottom-0'></div>
                <div className='order-online-wrapper-left m-0 py-[10px] px-[20px] relative w-[50%] '>
                    <Fade out><h2 className='m-0 p-0 text-[70px] text-custom_primary'>Royal</h2></Fade>
                    <Fade out delay={600}><h3 className='m-0 p-0 text-[66px]'>Home Delivery</h3></Fade>
                    <Fade out delay={800}> <p className='text-left text-[23px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua</p></Fade>
                    <span className='button choose-recipe inline-block w-[220px] p-[7px] mt-[50px] text-[22px] rounded-[40px]'>Choose recipe</span>
                </div>


                <div className='order-online-wrapper-right m-0 p-[20px] w-[50%]  relative overflow-hidden'>
                     <Fade right delay={1000}> <div className='bike-container absolute top-[-40px] left-[100px] w-[400px] h-[480px]'>
                        
                    </div></Fade>
                    <p className='absolute top-[550px] text-left text-[19px] mr-[17px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
            </div>
            <div className='about-container'>
              <About />
            </div> 
        </div>
        
    );
}

export default OrderOnline;