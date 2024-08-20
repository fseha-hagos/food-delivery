import  {React, useState , useEffect} from 'react';
import '@fontsource/lily-script-one';
import './styles/home.css'
import Navbar from "./components/navbar";
import Footer from './components/footer';
import RecipeRProductCard from './components/recipeRProductCard';
import pizzaImage from "./assets/bgpizza-39d43bb340c543c7808076f899ced767.png"
import { Fade } from 'react-reveal';
import { Link, useLocation } from 'react-router-dom';
import { useCartAuth } from '../context/cartContext';
import { BACKEND_BASE_URL } from '../context/constants';


const RecipeDetail = (  ) => {
  const location = useLocation();
  //const { product } = location.state ;

  const [relatedItems, setRelatedItems] = useState([{}]);
  const {carts,onAddToCart,refreshCart,deleteFromCart} = useCartAuth();
  const  item  = location.state ;
// 'Cart',{item: null}
//   const item = props.product
  // const  handleAddToCart = (items) =>{
  //   items.color = items.colors[activeColorIndex];
  //   items.totalPurchase = total;
  //   onAddToCart!(items)
    
  //   setTotal(1)
  //   navigation.navigate('Cart',{item: null});
  // }


  // return (
  //   <div className="bg-custom_background dark:bg-slate-900">
  //     <span className='bg-triangle'></span>
  //     <Navbar />
  //       <div className='md:flex sm:block justify-center mt-10'>
  //         <Fade left delay={300}>
  //         <div className='w-auto mx-5'>
  //             <img className='w-auto h-[300px]' src={pizzaImage}/>
  //             </div>
  //             </Fade>
  //             <Fade right delay={300}>
  //           <div className='border-2 border-amber-500 lg:w-1/2 md:w-1/3 mx-3 p-5'>
  //               <h2 className='text-amber-500'>Food Name</h2>
  //               <h3 className='text-slate-400'>299.99 Birr</h3>
            // <p className='text-slate-900 dark:text-slate-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            //         Nam hendrerit nisi sed sollicitudin pellentesque. Nunc
            //         posuere purus rhoncus pulvinar aliquam. Ut aliquet
            //         tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis.
            //         Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet 
            //         sodales felis. Duis nunc eros, mattis at dui ac, convalli
  //               </p>
  //               <Link to="/menu" className=' mt-5 px-[48px] py-2 rounded-xl border-2 border-amber-500 no-underline text-amber-500 hover:text-white hover:bg-amber-500'>Order Now</Link>
  //           </div>
  //           </Fade>
  //       </div>
  //       <Fade right delay={600}>
  //       <div className='rrelative-container'>
  //           <h3>Related Recipes</h3>
  //           <hr className='hor-line'/>
  //           <div className='rrelative-products'>
  //           <RecipeRProductCard />
  //           <RecipeRProductCard />
  //           <RecipeRProductCard />
  //           <RecipeRProductCard />
  //           <RecipeRProductCard />
  //           </div>
            
  //       </div>
  //       </Fade >
        
  //         <div className='about-container'>
  //             <Footer />
  //           </div> 
          
         
  //     </div>
      
   
  // );


  // menu_id = models.CharField(max_length=8, default=generate_unique_code, unique=True)
  // #catagory_id = models.OneToOneField(Catagory, on_delete=models.SET_NULL, null=True)
  // catagory_id = models.ForeignKey(Catagory, on_delete=models.SET_NULL, null=True)
  // item_name = models.CharField(max_length=100)
  // image = models.ImageField(upload_to="item-images", default="default.jpg")
  // description =models.TextField()
  // price = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
  // availability
  
  // const { state } = useLocation();
  // const { product } = state;
  // const itemss  = route.params?.product;

  useEffect(
    ()=>{
      console.log("recipe item data: ", location.state);
      getRelatedItems()
    }
  , [])

 
  const getRelatedItems = async () => {
    try{
      let response = fetch(
        BACKEND_BASE_URL+"/menu");
            
        // FetchRes is the promise to resolve
        // it by using.then() method
        response.then(res =>
            res.json()).then(d => {
              setRelatedItems(d)
              console.log("menus loaded succesfully");
              console.log(d)
            });
    }catch{
      console.log("there was a server issue");
    }
  }

  return (
    <div className="bg-custom_background dark:bg-slate-900">
      <span className='bg-triangle'></span>
      <Navbar />
        <div className='md:flex sm:block justify-center mt-10'>
          <Fade left delay={300}>
          <div className='w-auto mx-5'>
              <img className='w-auto h-[300px]' src={BACKEND_BASE_URL + item.image /* items.image */}/>
              </div>
              </Fade>
              <Fade right delay={300}>
            <div className='border-2 border-amber-500 lg:w-1/2 md:w-1/3 mx-3 p-5'>
                <h2 className='text-amber-500'>{item.item_name /* items.item_name */}</h2>
                <h3 className='text-slate-400'>{ item.price/** items.price*/} Birr</h3>
            <p className='text-slate-900 dark:text-slate-200'>{item.description /* items.description*/}
                </p>
                <div className=' mt-5 px-[48px] py-2 rounded-xl border-2 border-amber-500 no-underline text-amber-500 hover:text-white hover:bg-amber-500'>Order Now</div>
                
            </div>
            </Fade>
        </div>
        <Fade right delay={600}>
        <div className='rrelative-container'>
            <h3>Related Recipes</h3>
            <hr className='hor-line'/>
            <div className='rrelative-products'>
            
            
            {
              relatedItems.map((item,index) => (
                <RecipeRProductCard item ={item}/>
              ))
            }
            
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
