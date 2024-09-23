import '@fontsource/lily-script-one';
import './styles/home.css'
import Navbar from "./components/navbar";
import Footer from './components/footer';
import RecipeRProductCard from './components/recipeRProductCard';
import { IconContext } from 'react-icons';
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BACKEND_BASE_URL } from '../context/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// const menuItems = [
//   { text: 'All', className: 'menu-btn-all' },
//   { text: 'Appetizers', className: 'menu-btn-appetizers' },
//   { text: 'Salads', className: 'menu-btn-salads' },
//   { text: 'Main Courses', className: 'menu-btn-main-courses' },
//   { text: 'Pastas', className: 'menu-btn-pastas' },
//   { text: 'Pizza', className: 'menu-btn-pizza' },
//   { text: 'Burgers', className: 'menu-btn-burgers' },
//   { text: 'Our Special', className: 'menu-btn-our-special' },
//   { text: 'Desserts', className: 'menu-btn-desserts' },
//   { text: 'Beverages', className: 'menu-btn-beverages' },
//   { text: 'Alcoholic Beverages', className: 'menu-btn-alcoholic-beverages' }
// ];

const MenuList = ({ catagoryLists }) => {
  return (
    <div className='menu-list'>
      {catagoryLists.map((item, index) => (
        <Link
          key={index}
          className={`button text-amber-700 dark:text-amber-300 hover:text-slate-950 dark:hover:text-slate-200 no-underline `}
        >
          {item.catagory_name}
        </Link>
      ))}
    </div>
  );
};
function MenuRecipe() {

  const [catagoryLists, setCatagoryLists] = useState([]);
  const [latestItems, setLatestItems] = useState([]);

  useEffect(
    () => {
      getCatagoryItems()
      getLatestItems()
    }
    , [])


  const getCatagoryItems = async () => {
    try {
      let response = fetch(
        BACKEND_BASE_URL + "/catagory");

      // FetchRes is the promise to resolve
      // it by using.then() method
      response.then(res =>
        res.json()).then(d => {
          setCatagoryLists(d)
          console.log("catgory loaded succesfully");
          console.log(d)
        });
    } catch {
      console.log("(MenuRecipe.js) === there was a server issue");
    }
  }

  const getLatestItems = async () => {
    try {
      let response = fetch(BACKEND_BASE_URL + "/menu");

      // FetchRes is the promise to resolve
      // it by using.then() method
      response.then(res =>
        res.json()).then(d => {
          setLatestItems(d)
          console.log("menus loaded succesfully");
          console.log(d)
        });
    } catch {
      console.log("there was a server issue");
    }
  }
  
  return (
    <div className='relative bg-amber-50 dark:bg-slate-900'>
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
        <Fade up>
        <h2 className='flex lg:w-1/2 text-amber-700 dark:text-amber-500 mb-5'>
          <hr className=' border-white w-24 mx-2' />
          Our menu
          <hr className='menu-hr border-white w-24 mx-2' />
        </h2>
        </Fade>
        <Fade up>
        <MenuList catagoryLists = {catagoryLists}/>
        </Fade>
      </div>


      <div className='menu-wrapper'>
      {latestItems.map((item, index) => (
                
                <RecipeRProductCard item={item} />
              ))}


      </div>
      <div className='flex text-xl  text-slate-200 items-center justify-center  my-[5%] mx-[5%] '>

        <div className=' text-left w-[100%] '><a href='/prev' className='text-slate-200 no-underline cursor-pointer'>prev <FontAwesomeIcon icon={faChevronLeft} size='x'/></a></div>          
        <div className=' text-right w-[100%] '><a href='/next' className='text-slate-200  no-underline cursor-pointer'><FontAwesomeIcon icon={faChevronRight} size='x' /> next</a> </div>         
         
          </div>
        <Footer />

</div >


  );
}

export default MenuRecipe;
