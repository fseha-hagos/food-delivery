import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import { AuthProvider } from './context/AuthContext';
import AboutUs from './pages/AboutUs';
import Home from './pages/home';
import MenuRecipe from './pages/MenuRecipe';
import OrderOnline from './pages/OrderOnline';
import RecipeDetail from './pages/RecipeDetail';
import Cart from './pages/cart';
import { CartProvider } from './context/cartContext'
import MyCartPage from './pages/MyCartPage';
import SignUp from './pages/SignUp';

import Login from './pages/Login';
import Contact from './pages/components/contact';

function App() {
    return (
        <Router>
            <AuthProvider>
                <CartProvider>
                    <Routes>
                    <Route path="/"
                        element={<Home />} />
                    <Route path="/home"
                        element={<Home />} />
                    <Route path="/menu"
                        element={<MenuRecipe />} />
                    <Route path="/order-online"
                        element={<OrderOnline />} />
                    <Route path="/recipe"
                        element={<RecipeDetail />} />
                    <Route path="/about"
                        element={<AboutUs />} />

                    <Route path="/login"
                        element={<Login />} />
                    <Route path="/signup"
                        element={<SignUp />} />
                    <Route path="/contact"
                        element={<Contact />} />
                   
                       
                       
                        <Route path="/cart"
                            element={<Cart />} />
                        <Route path="/mycart"
                            element={<MyCartPage />} />
                    </Routes>
                </CartProvider>
            </AuthProvider>
        </Router>
    )
}

export default App;
