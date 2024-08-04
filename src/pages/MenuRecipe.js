import '@fontsource/lily-script-one';
import './styles/home.css'
import Navbar from "./components/navbar";
import ProductCard from "./components/product-card";
import Contact from './components/contact';
import Footer from './components/footer';
import RecipeRProductCard from './components/recipeRProductCard';
import { IconContext } from 'react-icons';
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { Fade, Slide, Bounce } from 'react-reveal';
import { Link } from 'react-router-dom';

const menuItems = [
  { text: 'All', className: 'menu-btn-all' },
  { text: 'Appetizers', className: 'menu-btn-appetizers' },
  { text: 'Salads', className: 'menu-btn-salads' },
  { text: 'Main Courses', className: 'menu-btn-main-courses' },
  { text: 'Pastas', className: 'menu-btn-pastas' },
  { text: 'Pizza', className: 'menu-btn-pizza' },
  { text: 'Burgers', className: 'menu-btn-burgers' },
  { text: 'Our Special', className: 'menu-btn-our-special' },
  { text: 'Desserts', className: 'menu-btn-desserts' },
  { text: 'Beverages', className: 'menu-btn-beverages' },
  { text: 'Alcoholic Beverages', className: 'menu-btn-alcoholic-beverages' }
];

const MenuList = () => {
  return (
    <div className='menu-list'>
      {menuItems.map((item) => (
        <Link
          key={item.className}
          className={`button text-amber-300 no-underline hover:text-amber-600 ${item.className}`}
        >
          {item.text}
        </Link>
      ))}
    </div>
  );
};
function MenuRecipe() {
  return (
    <div className="bg bg-custom_background dark:bg-slate-900">
      <Navbar />
      <div className='menu-header'>
        <div className='md:flex sm:block justify-center'>
          <Fade left>
            <p className='text-slate-900 dark:text-slate-200 h-auto md:w-1/2  md:my-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam hendrerit nisi sed sollicitudin pellentesque Nunc
              posuere purus rhoncus pulvinar aliquam.
            </p>
          </Fade>
          <Fade right delay={300}>
            <div className='h-auto mx-5'> <img src={require("./assets/logo.png")} alt={"Carlie Anglemire"} style={{ width: "250px", height: "250px" }} /> </div>
          </Fade>
        </div>
        <h2 className='flex lg:w-1/2 text-amber-500 mb-5'>
          <hr className=' border-white w-24 mx-2' />
          Our menu
          <hr className='menu-hr border-white w-24 mx-2' />
        </h2>
        <Fade up>
        <MenuList />
        </Fade>
      </div>


      <div className='menu-wrapper'>
        <Fade up delay={100} >
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
        <RecipeRProductCard />
</Fade>

      </div>
      <div className='menu-botm-nav'>
        <div className=' button nav-button-icon'><IconContext.Provider value={{ color: 'white', size: '30px', className: 'menu-icon' }} >
          <div>
            <CiCircleChevLeft />
          </div>
        </IconContext.Provider>

          <span className='text-slate-900 dark:text-slate-200 text-xs'>Prev</span>
        </div>
        <div className='button nav-button-icon'>
           <span className='text-slate-900 dark:text-slate-200 text-xs'>Next</span>
           <IconContext.Provider value={{ color: 'white', size: '30px', className: 'menu-icon' }} >
          <div >
            <CiCircleChevRight />
          </div>
        </IconContext.Provider>
        </div>
      </div>

      <div className='about-container'>
        <Footer />
      </div>


    </div>


  );
}

export default MenuRecipe;
