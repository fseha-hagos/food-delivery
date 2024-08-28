/*
import './App.css';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Home from './pages/home';
import MenuRecipe from './pages/MenuRecipe';
import OrderOnline from './pages/OrderOnline';
import RecipeDetail from './pages/RecipeDetail';
import SignUp from './pages/SignUp';

import {
  BrowserRouter as Router,
  Routes, Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
     
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
                        element={<SignUp />} />
                    <Route path="/contact"
                        element={<Contact />} />
                </Routes>
    </div>
    </Router>
  );
}

export default App;


*/
import React from 'react'

import {BrowserRouter as Router,  Routes, Route,} from "react-router-dom"
import PrivateRoute from "./utils/PrivateRoute"
import { AuthProvider } from './context/AuthContext'

import Homepage from './views/Homepage'
import Registerpage from './views/Registerpage'
import Loginpage from './views/Loginpage'
import Dashboard from './views/Dashboard'
import Navbar from './pages/components/navbar'
import Footer from './pages/components/footer'
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Home from './pages/home';
import MenuRecipe from './pages/MenuRecipe';
import OrderOnline from './pages/OrderOnline';
import RecipeDetail from './pages/RecipeDetail';
import SignUp from './pages/SignUp';
import { CartProvider } from './context/cartContext'
import Login from './pages/Login'
import MyCartPage from './pages/MyCartPage'
import PaymentPage from './pages/PaymentPage'



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
                    <Route path="/mycart"
                        element={<MyCartPage />} />
                    <Route path="/payment"
                        element={<PaymentPage />} />

                   {/* <Route path='/home' element={ <PrivateRoute> <Home /> </PrivateRoute> }></Route> */}
 
            {/*  
         <Route element={<Loginpage />} path="/login" />
     
         <Route element={<Registerpage />} path="/register" exact />
         <Route element={<Homepage />} path="/" exact />
       
*/}

</Routes>

</CartProvider>
     </AuthProvider>
   </Router>
  )
}

export default App
