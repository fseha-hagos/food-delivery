import '@fontsource/lily-script-one';
import './styles/home.css'
import Navbar from "./components/navbar";
import ProductCard from "./components/product-card";
import Contact from './components/contact';
import About from './components/about';
import RecipeRProductCard from './components/recipeRProductCard';


function RecipeDetail() {
  return (
    <div className="home-container">
      <span className='bg-triangle'></span>
      <Navbar />
        <div className='recipe-wrapper'>
            <div className='recipe-img-container'><img style={{width:"430px", height:"430px"}} src={require('./assets/bgpizza-39d43bb340c543c7808076f899ced767.png')}/></div>
            <div className='recipe-contents'>
                <h2>Food Name</h2>
                <h3>299.99 Birr</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam hendrerit nisi sed sollicitudin pellentesque. Nunc
                    posuere purus rhoncus pulvinar aliquam. Ut aliquet
                    tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis.
                    Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet 
                    sodales felis. Duis nunc eros, mattis at dui ac, convalli
                </p>
                <span className='button order-button'>Order Now</span>
            </div>
        </div>
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
        
          <div className='about-container'>
              <About />
            </div> 
          
         
      </div>
      
   
  );
}

export default RecipeDetail;
