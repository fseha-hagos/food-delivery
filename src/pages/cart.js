import React, { useContext, useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Fade } from 'react-reveal';
import { useCartAuth } from '../context/cartContext';
import { BACKEND_BASE_URL } from '../context/constants';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
const swal = require('sweetalert2')

 function Cart() {



    

    const [ispayed, setIsPayed] = useState(true);
    const [orderId, setOrderId] = useState(null); //temporary not used
    const [isOrderSaved , setIsOrderSaved] = useState(true); //temporary not used
    const [isPaymentVarified, setIsPaymentVarified] = useState(true); //temporary not used
    const [isLoading, setIsLoading] = useState(false);
    
    const navigation = useNavigate();

    const {user } = useContext(AuthContext);
    const {carts,  handleQuantityChange,
        handleRemoveItem,
        calculateItemTotal,
        calculateSubtotal,
        calculateTax,
        calculateTotal,
        deleteAllCartItems} = useCartAuth();

    const [darkMode, setDarkMode] = useState(false);
  
const itemCount= carts.length;

    // const handleQuantityChange = (id, quantity) => {
    //     setCartItems(
    //         carts.map(item => {
    //             if (item.id === id) {
    //                 return { ...item, quantity };
    //             }
    //             return item;
    //         }),
    //     );
    // };

    // const handleRemoveItem = id => {
    //     setCartItems(cartItems.filter(item => item.id !== id));
    // };

    // const calculateItemTotal = (item) => {
    //     return item.price * item.quantity;
    // };

    // const calculateSubtotal = () => {
    //     return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    // };

    // const calculateTax = () => {
    //     return calculateSubtotal() * 0.1;
    // };

    // const calculateTotal = () => {
    //     return calculateSubtotal() + calculateTax();
    // };


    const onCheckoutButtonClicked = () => {
        if(carts === null ){
            navigation('/menu')
        }
        else{
            if(user !== null) {
                handleCheckout()
            }
            else {
                navigation('/login')
            }
        }
        
    }

     //this function executes only when the user logged in and cart is not empty.
    const handleCheckout = async () => {
           
            setIsLoading(true)
            if(ispayed){
                try{
                    const total_ammount = calculateTotal().toFixed(2)
                    console.log("total_ammount : ", total_ammount)
                    const data =  await addOrder(user.user_id,"mekelle",total_ammount,"pending")
                    if (data !== null  && total_ammount!==0){
                        console.log("adding payment")
                        const paymentData = await addPayment(data.order_id,total_ammount,"chapa"); 
                        if(paymentData !== null) {
                            console.log("payment varified")
                            carts.map((item, index) => {
                                addOrderItems(item.menu_id, data.order_id, item.quantity, item.price)
        
                            })
                            setIsLoading(false)
                            deleteAllCartItems()
                        }
                    
                    }
                }catch{
                    console.log("there was a server issue");
                    swal.fire({
                        title: "there is problem in adding data",
                        icon: "error",
                        toast: true,
                        timer: 6000,
                        position: 'top-right',
                        timerProgressBar: true,
                        showConfirmButton: false,
                    })
                }

                setIsLoading(false)
                
            }else{
                setIsLoading(false)
                return
            } 
       
    }


    const addOrder =  async (user_id,delivery_address,total_ammount,order_status="pending") => {
        const response = await fetch(BACKEND_BASE_URL+"/order", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                user_id,delivery_address,total_ammount,order_status
            })

        })
        
        console.log("response",response);
        const data = await response.json()
        if(response.status === 200){
            setOrderId(data.order_id);
            setIsOrderSaved(true)
            console.log("order confirmed",);
         }
          else {    
            console.log(response.status);
            console.log("there was a server issue");
            swal.fire({
                title: "there is problem in adding data",
                icon: "error",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            })
           
        }
        return data
    }


    const addOrderItems = async (menu_id, order_id, quantity, price) =>{
        console.log("order items adding")
        const response = await fetch(BACKEND_BASE_URL+"/order-items", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                menu_id, order_id, quantity, price
            })

        })
        const data = await response.json()

        if(response.status === 200){
            console.log("order items confirmed");
            //navigate("/")
            swal.fire({
                title: "order confirmed",
                icon: "success",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            })

           
        } else {    
            console.log(response.status);
            console.log("there was a server issue");
            swal.fire({
                title: "there is problem in adding data",
                icon: "error",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            })
           
        }
        
    }

    const addPayment = async (order_id,amount,payment_method="chapa") =>{
        const response = await fetch(BACKEND_BASE_URL+"/payment", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                order_id,amount,payment_method
            })

        })
        let data = await response.json()
        const status =  response.status
        console.log(status)
        if(status === 200){
            setIsPaymentVarified(true)
            console.log("payment confirmed");
            
        } else {    
            setIsPaymentVarified(false)
            data = null
            console.log(response.status);
            console.log("payment not confirmed");
            swal.fire({
                title: "payment not confirmed",
                icon: "error",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            })
           
        }

        return data
    }

    return (
        <div className='relative bg-amber-50 dark:bg-slate-900'>
            <Navbar />
            <div className='flex flex-col px-4 md:px-8 lg:px-12 md:mx-[5%]'>
                <Fade up delay={300}>
                    <h1 className="text-2xl font-bold mt-3 mb-2 text-amber-500" > Shopping Cart</h1>
                    <div className='text-slate-800 dark:text-slate-200 mb-5 '> your cart has {itemCount} items </div>
                </Fade>
                <div className='block md:flex '>
                    <Fade left delay={400}>
                        <ul className="list-none bg-amber-200 dark:bg-slate-800 w-3/4  ">
                            {carts? carts.map(item => (
                                <li key={item.menu_id}>
                                    <Fade up delay={600}>
                                        <div className="flex  mt-5 text-slate-800 dark:text-slate-200   ">
                                            <img src={BACKEND_BASE_URL +item.image} alt={item.item_name} className="w-[150px] h-[150px] rounded-full" />
                                            <div className='mx-5'>
                                                <h2 className="text-lg mb-3 " >{item.item_name} </h2>
                                                <p className='pr-5'>descriptions</p>
                                            </div>
                                            <div className='mx-3'>
                                                <div>Qty:</div>
                                                <hr />
                                                <input type="number" value={item.quantity} onChange={e => handleQuantityChange(item.menu_id, e.target.value)}
                                                    className="w-12 pl-2 text-sm bg-transparent"
                                                    min={1}
                                                />
                                            </div>
                                            <div className='mx-3'>
                                                <div>{item.price} birr</div>
                                                <div className='text-sm text-slate-500 dark:text-slate-400 mb-2'>price per one</div>
                                                <div>{calculateItemTotal(item).toFixed(2)} birr</div>
                                                <div className='text-sm text-slate-400 mb-5'>total price</div>
                                                <button onClick={() => handleRemoveItem(item.menu_id)}
                                                    className="bg-violet-700 hover:bg-violet-900  text-slate-100 font-bold mb-5 py-2 px-4 rounded"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </Fade>
                                    <hr />
                                </li>
                            )) 
                        :
                        <></>}
                        </ul>
                    </Fade>
                    <Fade right delay={500}>
                        <div className="w-1/3 h-1/2  mx-1 p-5 bg-amber-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200" >
                            <Fade up delay={600}>
                                <h2 className="text-lg mb-3 ">Cart Summary</h2>
                                <p>Subtotal:<span className='float-right' >{calculateSubtotal().toFixed(2)} birr</span></p>
                                <p>Tax:<span className='float-right' >{calculateTax().toFixed(2)} birr</span></p>
                                <hr />
                                <p>Total:<span className='float-right' >{calculateTotal().toFixed(2)} birr</span></p>
                                <button onClick={() => onCheckoutButtonClicked()}className="bg-amber-500 float-right hover:bg-amber-600 text-white font-bold px-5 py-2 my-3 rounded-full">
                                    Checkout
                                </button>
                            </Fade>
                        </div>
                    </Fade>

                </div>
            </div >
            <Footer />
        </div >


    );
};

export default Cart;
