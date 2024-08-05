import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { Fade, Slide } from 'react-reveal';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <Slide down>
      <nav className="bg-slate-200 border-slate-200 dark:bg-slate-950">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Logo />
          <div className="flex md:order-2">
            <AuthButtons />
            <SearchToggle onClick={handleSearchToggle} isOpen={searchOpen} />
            <MenuToggle onClick={handleMenuToggle} isOpen={menuOpen} />
          </div>
          <SearchInput isOpen={searchOpen} />
          <Menu isOpen={menuOpen} />
        </div>
      </nav>
    </Slide>
  );
};

const Logo = () => (
  <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse no-underline">
    <img src={logo} className="h-10" alt="Royal Delivery Logo" />
    <span className="self-center text-xl font-semibold whitespace-nowrap text-amber-500 dark:text-amber-200 hover:text-slate-900 dark:hover:text-amber-500">
      Royal Delivery
    </span>
  </a>
);

const AuthButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center">
      <button
        type="button"
        className="text-slate-900 dark:text-white border-2 border-amber-200 hover:border-amber-600 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm mr-2 px-3 py-1 text-center dark:hover:bg-amber-600 dark:focus:ring-amber-800"
        onClick={() => navigate("/login")}
      >
        Log In
      </button>
    </div>
  );
};

const SearchToggle = ({ onClick, isOpen }) => (
  <button
    type="button"
    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-amber-500 rounded-lg md:hidden hover:text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:text-amber-200 dark:hover:text-amber-500 dark:focus:ring-amber-200"
    onClick={onClick}
    aria-controls="search-input"
    aria-expanded={isOpen}
  >
        <span className="sr-only">Search</span>
    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
/>
    </svg>
  </button>
);

const SearchInput = ({ isOpen }) => (
  <div
    className={`md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'} w-full`}
    id="search-input"
  >
    <Fade down>
      <div className="relative mt-3 md:hidden">
        <input
          type="text"
          className="block w-full p-2 ps-20 text-sm text-slate-900  rounded-lg bg-slate-200 dark:bg-slate-700 dark:text-slate-200  dark:placeholder-slate-400 "
          placeholder="Search..."
        />
      </div>
    </Fade>
  </div>
);

const MenuToggle = ({ onClick, isOpen }) => (
  <button
    type="button"
    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-amber-500 rounded-lg md:hidden hover:text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:text-amber-200 dark:hover:text-amber-500 dark:focus:ring-amber-200"
    onClick={onClick}
    aria-controls="navbar-menu"
    aria-expanded={isOpen}
  >
    <span className="sr-only">Open main menu</span>
    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1h15M1 7h15M1 13h15"
      />
    </svg>
  </button>
);

const Menu = ({ isOpen }) => (
  <div
    className={`md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'} w-full`}
    id="navbar-menu"
  >
    <Fade down delay={300}>
      <div className="relative mt-3 md:hidden">
        <input
          type="text"
          id="search-input"
          className="block w-full p-2 ps-20 text-sm text-slate-900  rounded-lg bg-slate-200 dark:bg-slate-700 dark:text-slate-200  dark:placeholder-slate-400 "
          placeholder="Search..."
        />
      </div>
    </Fade>
    <Fade down delay={500}>
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:border md:border-slate-50 rounded-lg bg-amber-200 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-slate-900 md:dark:bg-slate-900 dark:border-slate-700">
        {['Home', 'Menu', 'Order Online', 'About', 'Contact'].map((item, index) => (
          <li key={index}>
            <Link
              to={`/${item.toLowerCase().replace(' ', '-')}`}
              className="block no-underline sm:p-3  md:px-5 hover:rounded-2xl text-slate-900 dark:text-amber-200  bg-transparent hover:text-amber-500  sm:hover:border sm:hover:border-amber-500 md:hover:border-transparent dark:hover:text-amber-500 dark:border-slate-700"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </Fade>
  </div>
);

export default Navbar;
