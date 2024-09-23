import '@fontsource/lily-script-one';
import './styles/home.css'
import Navbar from "./components/navbar";
import ProductCard from "./components/product-card";
import Contact from './components/contact';
import Footer from './components/footer';
import { Fade } from 'react-reveal';
import { useContext, useEffect, useState } from 'react';
import { BACKEND_BASE_URL } from '../context/constants';
import homeImage from './assets/home-1.png';
import foodImage from './assets/image-2.jpg';
import image from './assets/web.tif';
import AuthContext from '../context/AuthContext';

import SignUp from './SignUp';
import MenuRecipe from './MenuRecipe';
import { Link } from 'react-router-dom';


const FoodImage = ({ src }) => {
  return (
    <Fade bottom cascade>
      <img
        src={src}
        alt="Food"
        className="animate-wander absolute w-25 h-auto rounded-full transition-transform"
      />
    </Fade>
  );
};


function Home() {

  const [latestItems, setLatestItems] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(
    () => {
      getLatestItems()
    }
    , [])


  const getLatestItems = async () => {
    try {
      let response = fetch(BACKEND_BASE_URL + "/menu");

      // FetchRes is the promise to resolve
      // it by using.then() method
      response.then(
        res => res.json()).then(
          d => {
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
      <div className="w-full h-screen mx-auto ">
        <Navbar />
        <div className='sm:block md:flex '>
          <Fade up delay={100}>
            <div className='p-[5%]  w-1/2'>
              <div className='text-slate-800 dark:text-slate-200 font-bold text-7xl '>From Our Kitchen</div>
              <div className='text-amber-500 font-bold text-6xl mb-[10%]'>to Your Table</div>
              <p className='text-left text-base  text-slate-900 dark:text-slate-300'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly believable.
              </p>
              <div className='flex'>
                <a href="/menu" >
                  <button className='transition-transform duration-300 hover:scale-110 text-amber-600 dark:text-amber-500 border-2 border-amber-500 mt-4 py-1 px-4  rounded-full text-lg hover:text-white dark:hover:text-slate-900 hover:bg-amber-500 '>Order Now</button>
                </a>
                {
                user ? (<></>) :
                <a href='/SignUp'>
                  <button className='transition-transform duration-300 hover:scale-110 text-amber-600 dark:text-amber-500 border-2 border-amber-500 mt-4 py-1 px-4 ml-5  rounded-full text-lg hover:text-white dark:hover:text-slate-900 hover:bg-amber-500 '>Sign Up</button>
                </a>
                }
              </div>
            </div>
          </Fade>
          <Fade right delay={100}>
            <div className='w-1/2 relative mr-[5%]' >
            <img src={image} alt='paint' className='mt-[25%] ml-[10%]' />
              <img src={homeImage} alt="Chef" className='absolute w-[55%] top-5 right-[15%] transition-transform ' />
              <div className='flex items-center'>
                <a href='#' className='cursor-pointer '>
                  <img src={foodImage} alt="Food"
                    className="animate-wander absolute  w-[24%] h-auto rounded-full transition-transform left-[10%] top-[50%]" />
                </a>
                <a href='#' className='cursor-pointer'>
                  <img src={foodImage} alt="Food"
                    className="animate-wander absolute w-[24%] h-auto rounded-full transition-transform left-[45%] top-[75%]"
                  />
                </a>
                <a href='#' className='cursor-pointer'>
                  <img
                    src={foodImage} alt="Food"
                    className="animate-wander absolute w-[24%] h-auto rounded-full transition-transform left-[80%] top-[50%]"
                  />
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>


      <Fade up>
        <div className="flex items-center relative overflow-hidden my-[8%]">
          <div className='bg-amber-100 dark:bg-slate-800 w-[90%]  h-[500px]  mx-[2%]  lg:w-[70%]   overflow-hidden rounded-tl-[70px] rounded-br-[70px] float-left'>
            <div className='md:w-[50%] lg:w-[75%]  mt-[36px] ml-[30px] md:ml-[5px] lg:ml-[30px]'>
              <Fade up>
                <div className='text-amber-500 font-bold text-6xl text-left my-5 pt-3'>
                  Welcome
                </div>
              </Fade>
              <Fade up>
                <p className='text-left px-1 text-slate-900 dark:text-slate-300 pr-3' >
                  Welcome
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by injected
                  humour, or randomised words which don't look even slightly believable.There are many variations of passages of Lorem Ipsum availablethe majority have suffered alteration in some form, by injected or randomised words which don't look even slightl believable.
                </p>

                {
                  user ? (<></>) :
                  (<button className='transition-transform duration-300 hover:scale-110 text-amber-500 border-2 border-amber-500 mt-3 py-2 px-5 rounded-3xl text-xl hover:text-slate-900 hover:bg-amber-500 mt-5'>Sign up</button>
                  )
                }
                

                <a href='/SignUp'>
                  <button className='transition-transform duration-300 hover:scale-110 text-amber-600 dark:text-amber-500 border-2 border-amber-500 mt-3 py-2 px-5 rounded-3xl text-xl hover:text-white dark:hover:text-slate-900 hover:bg-amber-500 mt-5'>Get Started</button>
                </a>
              </Fade>

            </div>
          </div>

          <Fade right>
            <div className="welcome-showcase absolute mx-auto top-[495px] left-2 md:left-[50%] md:top-[0px] lg:left-[58%] lg:top-[20px] w-[98%] md:w-[50%] md:w-[400px] lg:w-[530px] h-[430px]">
              <Fade right delay={10} duration={1000} ><div className="welcome-showcase-image-1 absolute top-0 left-0 w-[50%] md:w-[70%] h-[380px] rounded-[16px]"></div></Fade>
              <Fade right delay={3} duration={1000} > <div className="welcome-showcase-image-2  absolute bottom-0 right-2  md:right-0  lg:right-2 w-[50%] md:w-[70%]  h-[380px] rounded-[16px]"></div></Fade>
            </div>
          </Fade>
        </div>
      </Fade>


      <Fade up>
        <div className="wrapper-container mx-[20px] md:mx-[90px] my-0 z-100">

          <p className='wrapper-title text-[35px]  flex items-center justify-center dark:text-slate-200'>
            <span className='inline-block my-0 mx-[10px] md:mx-[28px] w-[40px] h-[3px] border-t-[1px] border-solid border-slate-200 z-1'></span>
            today’s special
            <span className='inline-block my-0 mx-[10px] md:mx-[28px] w-[40px] h-[3px] border-t-[1px] border-solid border-slate-200 z-1'></span></p>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
            <div className='relative grid grid-cols-1 gap-x-20 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8   z-3'>
              {latestItems.map((item, index) => (

                <ProductCard item={item} />
              ))}

            </div>
          </div>
          <div className='flex items-center justify-center'>
            <a href='/menu'>
              <button className='transition-transform duration-300 hover:scale-110 text-amber-600 dark:text-amber-500 border-2 border-amber-500 mt-3 py-2 px-5 rounded-full text-xl hover:text-white dark:hover:text-slate-900 hover:bg-amber-500 mt-5'>Discover more!</button>
            </a>
          </div>
        </div>
      </Fade>
      <Fade up>
        <Contact />
      </Fade>
      <Footer />
    </div>
  );
}
export default Home;
