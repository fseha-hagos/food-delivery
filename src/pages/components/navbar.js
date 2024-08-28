import React, { useContext, useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { Fade, Zoom } from 'react-reveal';
import Login from './login';
import AuthContext from '../../context/AuthContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const {user, logoutUser} = useContext(AuthContext);

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev);
    if (searchOpen) setSearchOpen(false);
  };

  const handleSearchToggle = () => {
    setSearchOpen(prev => !prev);
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <Fade down>
      <nav className="bg-slate-200 border-slate-200 dark:bg-slate-950">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Logo />
          <div className="flex md:order-2">
            <AuthButtons />
            <ToggleButton onClick={handleSearchToggle} isOpen={searchOpen} icon="search" ariaControls="search-input" ariaExpanded={searchOpen} />
            <ToggleButton onClick={handleMenuToggle} isOpen={menuOpen} icon="menu" ariaControls="navbar-menu" ariaExpanded={menuOpen} />
          </div>
          <SearchInput isOpen={searchOpen} />
          <Menu isOpen={menuOpen} />
        </div>
      </nav>
    </Fade>
  );
};

const Logo = () => (
  <Fade left>
  <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse no-underline">
    <img src={logo} className="h-10" alt="Royal Delivery Logo" />
    <span className="self-center text-xl font-semibold whitespace-nowrap text-amber-500 dark:text-amber-200 hover:text-slate-900 dark:hover:text-amber-500">
      Royal Delivery
    </span>
  </a>
  </Fade>
);

const AuthButtons = () => {

  const navigate = useNavigate();
  const [isLogInOpen, setIsLogInOpen] = useState(false);

  const {user, loginUser, logoutUser} = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogout = (event) => {
   
    logoutUser()
  
  };

  const onSubmitLogin = (event) =>{
    event.preventDefault();
    loginUser(email,password)
    setIsLogInOpen(false)
    
  }


  const toggleLogIn = () => {
    setIsLogInOpen(!isLogInOpen);
  };

  return (
    <div className="flex items-center">
      {
        user ? (<Button onClick={ handleLogout} label="Log out" />) 
               :(<><Button onClick={() => navigate('/signup')} label="Sign up" /><Button onClick={toggleLogIn} label="Log in" /></>)
      
    }
      <Login isOpen={isLogInOpen} onClose={() => setIsLogInOpen(false)}>  
        <h3 className='text-slate-900 text-center' >Log in</h3>
        <form onSubmit={onSubmitLogin}>
          <div className="mb-3">
            <label className="block text-sm font-medium text-slate-800">Email</label>
            <input type="email" className="mt-1 block w-full p-2 bg-slate-300  rounded-md" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="mb-5">
          <label className="block text-sm font-medium text-slate-800">Password</label>
          <input type="password" className="mt-1 block w-full p-2 bg-slate-300 rounded-md" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <input
              type="submit"
              name="submit"
              value="Log in"
              className="w-full p-2 border-2 border-slate-900 text-slate-900 hover:text-white rounded-lg hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300"
            />      
            </form>
        <div className='text-center text-slate-900 my-3'>Create new account? 
          <a href='/signup' className='no-underline text-slate-200 hover:text-slate-950' > Sign up</a>
          </div>
      </Login>
    </div>
  );

};

const Button = ({ onClick, label }) => (
  <button
    type="button"
    onClick={onClick}
    className="text-slate-900 dark:text-amber-300 hover:text-black border-2 border-amber-300 hover:border-amber-600 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm mr-2 px-3 py-1 text-center dark:focus:ring-amber-800 transition duration-200 ease-in-out"
  >
    {label}
  </button>
);

const ToggleButton = ({ onClick, isOpen, icon, ariaControls, ariaExpanded }) => {
  const icons = {
    search: (
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
      </svg>
    ),
    menu: (
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    ),
  };

  return (
    <button
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-amber-500 rounded-lg md:hidden hover:text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:text-amber-200 dark:hover:text-amber-500 dark:focus:ring-amber-200 transition duration-200 ease-in-out"
      onClick={onClick}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
    >
      <span className="sr-only">{icon === 'search' ? 'Search' : 'Open main menu'}</span>
      {icons[icon]}
    </button>
  );
};

const SearchInput = ({ isOpen }) => (
  <div
    className={`md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'} w-full transition-opacity duration-300 ease-in-out`}
    id="search-input"
  >
    <div className="relative mt-3 md:hidden">
      <input
        type="text"
        className="block w-full p-2 ps-20 text-sm text-slate-900 rounded-lg bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:placeholder-slate-400"
        placeholder="Search..."
      />
    </div>
  </div>
);

const Menu = ({ isOpen }) => (
  <div
    className={`md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'} w-full transition-opacity duration-300 ease-in-out`}
    id="navbar-menu"
  >
    <div className="relative mt-3 md:hidden">
      <input
        type="text"
        id="search-input"
        className="block w-full p-2 ps-20 text-sm text-slate-900 rounded-lg bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:placeholder-slate-400"
        placeholder="Search..."
      />
    </div>
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:border md:border-slate-50 rounded-lg bg-amber-200 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-slate-900 md:dark:bg-slate-900 dark:border-slate-700">
      {['Home', 'Menu', 'Order Online', 'About', 'Contact'].map((item, index) => (
        <li key={index}>
          <NavLink
            to={`/${item.toLowerCase().replace(' ', '-')}`}
            className={({ isActive }) =>
              `block no-underline sm:p-3 md:px-5 hover:rounded-2xl ${isActive ? 'text-amber-500 bg-slate-100 dark:bg-slate-800' : 'text-slate-900 dark:text-amber-200'} bg-transparent hover:text-amber-500 sm:hover:border sm:hover:border-amber-500 md:hover:border-transparent dark:hover:text-amber-500 dark:border-slate-700 transition duration-200 ease-in-out`
            }
          >
            {item}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default Navbar;
