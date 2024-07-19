import '@fontsource/lily-script-one';
import './styles/home.css'
import Navbar from "./components/navbar";
import ProductCard from "./components/product-card";
import Contact from './components/contact';
import About from './components/about';
import RecipeRProductCard from './components/recipeRProductCard';
import { IconContext } from 'react-icons';
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";


function MenuRecipe() {
  return (
    <div className="home-container">
      <Navbar />
          <div className='menu-header'>
           
           <div className='menu-box'>
             <div className='menu-content'>
                 <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                 Nam hendrerit nisi sed sollicitudin pellentesque Nunc 
                 posuere purus rhoncus pulvinar aliquam.
                  </p>
                <h2 className='menu-title'><span className='menu-hr'></span>Our menu<span className='menu-hr'></span></h2>
             </div>

             <div className='menu-logo-container'> <img src={require("./assets/logo.png")} alt={"Carlie Anglemire"} style={{width:"250px", height: "250px"}}/> </div>
           </div>
            
            
            <div className='menu-list'>
                <span className='button menu-btn-all'>All</span>
                <span className='button menu-btn-appetizers'>Appetizers</span>
                <span className='button menu-btn-salads'>Salads</span>
                <span className='button menu-btn-main-courses'>Main courses</span>
                <span className='button menu-btn-pastas'>Pastas</span>
                <span className='button menu-btn-pizza'>Pizza</span>
                <span className='button menu-btn-burgers'>Burgers</span>
                <span className='button menu-btn-our-special'>Our Special</span>
                <span className='button menu-btn-desserts'>Desserts</span>
                <span className='button menu-btn-beverages'>Beverages</span>
                <span className='button menu-btn-alcholic-beverages'>Alcholic Beverages</span>
                
            </div>
          </div>
     
      
<div className='menu-wrapper'>
    <RecipeRProductCard />
    <RecipeRProductCard />
    <RecipeRProductCard />
    <RecipeRProductCard />
    <RecipeRProductCard />
    <RecipeRProductCard />
    <RecipeRProductCard />
    <RecipeRProductCard />
    <RecipeRProductCard />
    <RecipeRProductCard />
    <RecipeRProductCard />
    
</div>
<div className='menu-botm-nav'>
    <div className=' button nav-button-icon'><IconContext.Provider value={{ color: 'black', size: '30px', className: 'menu-icon'}} >
                <div>
                <CiCircleChevLeft />
                </div>
            </IconContext.Provider>
            
            <span>Prev</span>
            </div>
    <div  className='button nav-button-icon'> <span>Next</span><IconContext.Provider value={{ color: 'black', size: '30px', className: 'menu-icon'}} >
                <div >
                <CiCircleChevRight />
                </div>
            </IconContext.Provider>
            </div>
</div>
       
          <div className='about-container'>
              <About />
            </div> 
          
         
      </div>
      
   
  );
}

export default MenuRecipe;
