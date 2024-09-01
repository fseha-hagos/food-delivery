import React, { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import foodImage from './assets/image-2.jpg';
import { Fade } from 'react-reveal';

function Cart() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Especial pizza',
            price: 10.99,
            quantity: 1,
            image: { foodImage },
            description: " but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look ",
        },
        {
            id: 2,
            name: 'Especial burger',
            price: 15.99,
            quantity: 1,
            image: { foodImage },
            description: " but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look ",
        },
        {
            id: 3,
            name: 'Especial chicken burger',
            price: 20.99,
            quantity: 1,
            image: { foodImage },
            description: " but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look ",
        },
    ]);

    const [darkMode, setDarkMode] = useState(false);

    const handleQuantityChange = (id, quantity) => {
        setCartItems(
            cartItems.map(item => {
                if (item.id === id) {
                    return { ...item, quantity };
                }
                return item;
            }),
        );
    };

    const handleRemoveItem = id => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const calculateItemTotal = (item) => {
        return item.price * item.quantity;
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    const calculateTax = () => {
        return calculateSubtotal() * 0.1;
    };

    const calculateTotal = () => {
        return calculateSubtotal() + calculateTax();
    };

    return (
        <div className='bg-slate-900 '>
            <Navbar />
            <div className='flex flex-col px-4 md:px-8 lg:px-12 md:mx-[5%]'>
                <Fade up delay={300}>
                    <h1 className="text-2xl font-bold mt-3 mb-2 text-amber-500" > Shopping Cart</h1>
                    <div className=' text-slate-200 mb-5 '> your cart has items </div>
                    <div className='block md:flex '>
                        <ul className="list-none bg-slate-800 w-3/4  ">
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <div className="flex  mt-5  text-slate-200  ">
                                        <img src={item.image} alt={item.name} className="w-1/3 h-12" />
                                        <div className='mx-3'>
                                            <h2 className="text-lg mb-3 " >{item.name} </h2>
                                            <p className='pr-5'>{item.description}</p>
                                        </div>
                                        <div className='mx-3'>
                                            <div>Qty:</div>
                                            <hr />
                                            <input type="number" value={item.quantity}
                                                onChange={e => handleQuantityChange(item.id, e.target.value)}
                                                className="w-12 pl-2 text-sm bg-transparent"
                                            />


                                        </div>
                                        <div className='mx-3'>
                                            <div>{item.price} birr</div>
                                            <div className='text-sm text-slate-400 mb-2'>price per one</div>
                                            <div>{calculateItemTotal(item).toFixed(2)} birr</div>
                                            <div className='text-sm text-slate-400 mb-5'>total price</div>
                                            <button
                                                onClick={() => handleRemoveItem(item.id)}
                                                className="bg-violet-700 hover:bg-rose-700  text-slate-100 font-bold mb-5 py-2 px-4 rounded"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    <hr />
                                </li>
                            ))}

                        </ul>
                        <div className="w-1/3 h-1/2  mx-1 p-5 bg-slate-800 text-slate-200" >

                            <h2 className="text-lg mb-3 ">Cart Summary</h2>
                            <p>Subtotal:<span className='float-right' >{calculateSubtotal().toFixed(2)} birr</span></p>
                            <p>Tax:<span className='float-right' >{calculateTax().toFixed(2)} birr</span></p>
                            <hr />
                            <p>Total:<span className='float-right' >{calculateTotal().toFixed(2)} birr</span></p>
                            <button className="bg-amber-500 float-right hover:bg-orange-700 text-white font-bold px-5 py-2 my-3 rounded-full">
                                Checkout
                            </button>
                        </div>
                    </div>
                </Fade>
            </div >
            <Footer />
        </div >


    );
};

export default Cart;
