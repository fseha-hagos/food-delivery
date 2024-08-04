import React from 'react';
import '@fontsource/lily-script-one';
import './styles/home.css'
import Navbar from "./components/navbar";
import Footer from './components/footer';
import RecipeRProductCard from './components/recipeRProductCard';
import pizzaImage from "./assets/bgpizza-39d43bb340c543c7808076f899ced767.png"
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';


const RecipeDetail = () => {
  return (
    <div className="bg-custom_background dark:bg-slate-900">
      <span className='bg-triangle'></span>
      <Navbar />
        <div className='md:flex sm:block justify-center mt-10'>
          <Fade left delay={300}>
          <div className='w-auto mx-5'>
              <img className='w-auto h-[300px]' src={pizzaImage}/>
              </div>
              </Fade>
              <Fade right delay={300}>
            <div className='border-2 border-amber-500 lg:w-1/2 md:w-1/3 mx-3 p-5'>
                <h2 className='text-amber-500'>Food Name</h2>
                <h3 className='text-slate-400'>299.99 Birr</h3>
            <p className='text-slate-900 dark:text-slate-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam hendrerit nisi sed sollicitudin pellentesque. Nunc
                    posuere purus rhoncus pulvinar aliquam. Ut aliquet
                    tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis.
                    Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet 
                    sodales felis. Duis nunc eros, mattis at dui ac, convalli
                </p>
                <Link to="/menu" className=' mt-5 px-[48px] py-2 rounded-xl border-2 border-amber-500 no-underline text-amber-500 hover:text-white hover:bg-amber-500'>Order Now</Link>
            </div>
            </Fade>
        </div>
        <Fade right delay={600}>
        <div className='rrelative-container'>
            <h3>Related Recipes</h3>
            <hr className='hor-line'/>
            <div className='rrelative-products'>
            <RecipeRProductCard />
            <RecipeRProductCard />
            <RecipeRProductCard />
            <RecipeRProductCard />
            <RecipeRProductCard />
            </div>
            
        </div>
        </Fade >
        
          <div className='about-container'>
              <Footer />
            </div> 
          
         
      </div>
      
   
  );
}

export default RecipeDetail;
