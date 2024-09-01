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
                        <Route path="/cart"
                            element={<Cart />} />
                    </Routes>
                </CartProvider>
            </AuthProvider>
        </Router>
    )
}

export default App;
