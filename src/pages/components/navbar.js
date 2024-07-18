import React from 'react';
import '../styles/components.css';
import { IconContext } from 'react-icons';
import { IoSearch } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";



function Navbar() {
    return (
        <div className='navbar-container'>
            <div className='logo-container'>
                <img src={require("../assets/logo.png")} alt={"Carlie Anglemire"} style={{width:"120px", height: "100px"}}/>
            </div>
            <div className='menu-container'>
                <ul className='menu-list'>
                    <li className='menu-list-item'><a className='active' href='#'>Home</a></li>
                    <li className='menu-list-item'><a href='#'>Menu</a></li>
                    <li className='menu-list-item'><a href='#'>Order Online</a></li>
                    <li className='menu-list-item'><a href='About.js'>About</a></li>
                    <li className='menu-list-item'><a href='#'>Contact</a></li>
                </ul>
            </div>
            <div className='search-container'>
            <IconContext.Provider value={{ color: 'white', size: '30px', className: 'menu-icon'}} >
                <div className='menu-icon'>
                 <IoSearch />
                </div>
            </IconContext.Provider>
            <div className= 'login-button'  onClick={()=>alert("hello there")}><a style={{color:'white',height: '30px', fontWeight: "600", textAlign: "center"}}>Login</a></div>
            <IconContext.Provider value={{ color: 'white', size: '30px', className: 'menu-icon'}} >
                <div className='menu-icon'>
                  <TfiMenuAlt />
                </div>
            </IconContext.Provider>
            </div>
            
        </div>
    );
}

export default Navbar;