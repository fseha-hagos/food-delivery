import React, { useContext, useEffect, useState } from 'react';
import Navbar from './components/navbar';

import { useCartAuth } from '../context/cartContext';
import AuthContext from '../context/AuthContext';
import { BACKEND_BASE_URL } from '../context/constants';
const swal = require('sweetalert2')

function MyCartPage(props) {

    const [orderId, setOrderId] = useState(null);
    const [ammount, setAmmount] = useState(0);
    
    
    const [isOrderSaved, setIsOrderSaved] = useState(false)
    const [isOrderItemSaved, setIsOrderItemSaved] = useState(false)
    const [isPaymentVarified, setIsPaymentVarified] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const {carts } = useCartAuth();
    const {user } = useContext(AuthContext);



    useEffect(() => {
        console.log("user :", user)
        console.log("cart :", carts)
        console.log("ggggggg:" ,carts.length)
        console.log("ammoun:", ammount)
        carts.map((item , index) => {

            console.log("item", item.item_name)
            
        }) 
    })

    const handleOnConfirm = async () => {
        setIsLoading(true)
        calculateTotalPayment(carts)

       
       
        await addOrder(user.user_id,"mekelle",ammount)
       
        console.log("orderId :",orderId)
        console.log("isOrderSaved :",isOrderSaved)
        if (isOrderSaved && orderId !== null){
            console.log("adding payment")
            console.log("ammount :",ammount)
            await addPayment(orderId,ammount,"chapa") 

            if(isPaymentVarified) {
                
                console.log("payment varified")
                    carts.map(async (item, index) => {
                        await addOrderItems(item.menu_id, orderId, 2, item.price)
    
                    })
    
            }
        }
        
        if (orderId !== null){
            console.log("orderid not null")
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
             console.log("order confirmed");
       
           
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

        return response
    }

    const addOrderItems = async (menu_id, order_id, quantity, price) =>{
        const response = await fetch(BACKEND_BASE_URL+"/order-items", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                menu_id, order_id, quantity, price
            })

        })
        console.log("response",response);
        const data = await response.json()
        console.log(data);

        if(response.status === 200){
            console.log("order confirmed");
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
        console.log("response",response);
        const data = await response.json()
        console.log(data);

        if(response.status === 200){
            setIsPaymentVarified(true)
            console.log("payment confirmed");
            swal.fire({
                title: "payment confirmed",
                icon: "success",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            })

           
        } else {    
            setIsPaymentVarified(false)
            console.log(response.status);
            console.log("there was a server issue");
            swal.fire({
                title: "there was an error in payment",
                icon: "error",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            })
           
        }

    }

    const  calculateTotalPayment = (carts) => {
   
        let total_amount = 0.00
        carts.map((item, index) => {
            total_amount += Number(item.price)
        })

        setAmmount(total_amount)
    }

    return (
        <div  className='bg-custom_background dark:bg-slate-900 h-screen'>
        <Navbar />
            <h1 className='text-slate-900 dark:text-slate-200 text-center'> this is page for cart lists.</h1>
     

           
            {
                user ? 
                <h1 className='text-slate-900 dark:text-slate-200 text-center'>{user.token_type }</h1>
               
                    
                :<h1 className='text-slate-900 dark:text-slate-200 text-center'>  lists.</h1>
            }
            

<div className='flex flex-column gap-10 p-10'>
            <div className=' flex flex-row justify-around border-b-3'>

            <h1 className='text-slate-900 dark:text-slate-200 text-center'>image</h1>
            <h1 className='text-slate-900 dark:text-slate-200 text-center'>name </h1>
            <h1 className='text-slate-900 dark:text-slate-200 text-center'>price</h1>
            </div>

            {

// availability: true
// ​​
// catagory_id: 2
// ​​
// description: "wewewe"
// ​​
// image: "/media/item-images/b24f613f-72e8-475c-bc59-98a95383cf3c31.jpg"
// ​​
// item_name: "wewewe"
// ​​
// menu_id: "XFTBMY"
// ​​
// price: "45.43"
// <img style={{ width: "auto", height: "auto" }} src={BACKEND_BASE_URL + item.image} alt='produtcs' />
 

                carts.map((item , index) => {

                    return (

                    
                        <div className=' flex flex-row justify-around border-b-2'>

                              
                        <img style={{ width: "90px", height: "90px" }} src={BACKEND_BASE_URL + item.image} alt='produtcs' />
                         
                         
                            <h1 className='text-slate-900 dark:text-slate-200 text-center'>{item.item_name} </h1>
                            <h1 className='text-slate-900 dark:text-slate-200 text-center'>{item.price} </h1>
                       
                        
                        
                    </div>
                       
                    ) 
                    
                }) 
                
            }

</div> 
      {
        isLoading ? <div  className='m-auto text-center w-50 mt-5   px-[48px] py-2 rounded-xl border-2 border-amber-300 no-underline text-amber-900  bg-amber-200'>loading</div> 
                   :  <div    onClick={() => handleOnConfirm()} className='m-auto text-center w-50 mt-5   px-[48px] py-2 rounded-xl border-2 border-amber-500 no-underline text-amber-500 hover:text-white hover:bg-amber-500'>Order Now</div>
       
      }

                
     </div>
    );
}

export default MyCartPage;