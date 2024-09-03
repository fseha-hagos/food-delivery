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
import { useEffect, useState } from 'react';
import { BACKEND_BASE_URL } from '../context/constants';

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

const MenuList = ({catagoryLists}) => {
  return (
    <div className='menu-list'>
      {catagoryLists.map((item, index) => (
        <Link
          key={index}
          className={`button text-amber-300 no-underline hover:text-amber-600 `}
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
    ()=>{
      getCatagoryItems()
      getLatestItems()
    }
  , [])


  const getCatagoryItems = async () => {
    try{
      let response = fetch(
        BACKEND_BASE_URL+"/catagory");
            
        // FetchRes is the promise to resolve
        // it by using.then() method
        response.then(res =>
            res.json()).then(d => {
              setCatagoryLists(d)
              console.log("catgory loaded succesfully");
              console.log(d)
            });
    }catch{
      console.log("(MenuRecipe.js) === there was a server issue");
    }
  }
 
  const getLatestItems = async () => {
    try{
      let response = fetch(BACKEND_BASE_URL+"/menu");
            
        // FetchRes is the promise to resolve
        // it by using.then() method
        response.then(res =>
            res.json()).then(d => {
              setLatestItems(d)
              console.log("menus loaded succesfully");
              console.log(d)
            });
    }catch{
      console.log("there was a server issue");
    }
  }
  // const getLatestItems = async() => {
  //   try {

  //       let response = fetch(BACKEND_BASE_URL + "/menu");

  //       response.then(
  //         res => res.json()
  //       ).then(
  //         d => {
  //           setLatestItems(d);
  //           console.log("menus loaded succesfully");
  //           console.log(d);}
  //       );

  //     }catch{
  //       console.log("(MenuRecipe.js)===there is an error in quering menus")
  //     }

  // }
const Pay = () => {
  return(
    <div>
    <form method="POST" action="https://api.chapa.co/v1/hosted/pay"  style={{display: "flex", flexDirection:"column"}}>
    <input type="" name="public_key" value="CHAPUBK_TEST-8Gv64cU42Nx6imKUrJTTfX1fAWID7Mrz" />
    <input type="" name="tx_ref" value="negade-tx-12345678sss9" />
    <input type="" name="amount" value="100" />
    <input type="" name="currency" value="ETB" />
    <input type="" name="email" value="israel@negade.et" />
    <input type="" name="first_name" value="Israel" />
    <input type="" name="last_name" value="Goytom" />
    <input type="" name="title" value="Let us do this" />
    <input type="" name="description" value="Paying with Confidence with cha" />
    <input type="" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
    <input type="" name="callback_url" value="https://example.com/callbackurl" />
    <input type="" name="return_url" value="https://example.com/returnurl" />
    
    <button type="submit" name='submit'>Pay Now</button>
    <button type="submit">Pay Now</button>
    <button type="submit">Pay Now</button>
</form>
</div>
  )
}






const chapaPay = () =>{




var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer CHAPUBK_TEST-iT3q1JuetGSvs8i6dSblNDEDC5r9RozG");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "amount": "100",
    "currency": "ETB",
    "email": "abebech_bekele@gmail.com",
    "first_name": "Bilen",
    "last_name": "Gizachew",
    "phone_number": "0912345678",
    "tx_ref": "chewatatest-6669",
    "callback_url": "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
    "return_url": "https://www.google.com/",
    "customization[title]": "Payment for my favourite merchant",
    "customization[description]": "I love online payments",
    "meta[hide_receipt]": "true"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://api.chapa.co/v1/transaction/initialize", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


}










  const handlePay = ()=> {
    alert("handle pay")
    try{
      let response = fetch(BACKEND_BASE_URL+"/pay");
            
        // FetchRes is the promise to resolve
        // it by using.then() method
        //payment_data = JSONParser().parse(request)
        response.then(res =>
            res.json()).then(d => {
              //setPaymentUrl(d)
              console.log("payment url loaded successfuly");
              console.log(d)
            });
    }catch{
      console.log("there was a server issue");
    }
  
  }

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
        <MenuList catagoryLists = {catagoryLists}/>
        </Fade>
      </div>


      <div className='menu-wrapper'>
      {latestItems.map((item, index) => (
                
                <RecipeRProductCard item={item} />
              ))}


      </div>
     
      <Pay />
      <div  onClick={() => chapaPay()} className='m-auto text-center w-50 mt-5   px-[48px] py-2 rounded-xl border-2 border-amber-300 no-underline text-amber-900  bg-amber-200'>pay</div> 
     
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
