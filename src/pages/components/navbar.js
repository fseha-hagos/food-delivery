import React from 'react';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { Slide } from 'react-reveal';

const Navbar = () => {
  return (
    <Slide down>
    <nav className="bg-slate-200 border-slate-200 dark:bg-slate-950">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <div className="flex md:order-2">
          <AuthButtons />
          <SearchToggle />
          <SearchInput />
          <MenuToggle />
        </div>
        <Menu />
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

  return(
  <div className="flex items-center">
    <button
      type="button"
      className="text-slate-900 dark:text-white border-1 border-amber-200 hover:border-amber-600 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm mr-2 px-3 py-1 text-center  dark:hover:bg-amber-600 dark:focus:ring-amber-800"
      onClick={()=>navigate("/login")}
    >
      Log In
    </button>
  </div>
);
}

const SearchToggle = () => (
  <button
    data-collapse-toggle="navbar-search"
    type="button"
    className="md:hidden text-amber-500 dark:text-amber-200 hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-700 dark:focus:ring-amber-200 rounded-lg text-sm p-2.5 me-1"
    aria-controls="navbar-search"
    aria-expanded="false"
  >
    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
      />
    </svg>
    <span className="sr-only">Search</span>
  </button>
);

const SearchInput = () => (
  <div className="relative hidden md:block">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg className="w-4 h-4 text-slate-900 dark:text-slate-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>
    <input
      type="text"
      id="search-navbar"
      className="block w-full p-2 ps-10 text-sm text-slate-900 border border-slate-300 rounded-lg bg-slate-50 focus:ring-amber-500 focus:border-amber-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
      placeholder="Search..."
    />
  </div>
);

const MenuToggle = () => (
  <button
    data-collapse-toggle="navbar-search"
    type="button"
    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-amber-500 rounded-lg md:hidden hover:text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:text-amber-200 dark:hover:text-amber-500 dark:focus:ring-amber-200"
    aria-controls="navbar-search"
    aria-expanded="false"
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


const Menu = () => (
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
    <div className="relative mt-3 md:hidden">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-slate-500 dark:text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="text"
        id="search-navbar"
        className="block w-full p-2 ps-10 text-sm text-slate-900 border border-amber-300 rounded-lg bg-slate-50 focus:ring-amber-500 focus:border-slate-500 dark:text-slate-700 dark:border-amber-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
        placeholder="Search..."
      />
    </div>
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-slate-900 md:dark:bg-slate-900 dark:border-slate-700">
      {['Home', 'Menu', 'Order Online', 'About', 'Contact'].map((item, index) => (
        <li key={index}>
          <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className={"block no-underline py-2 px-3 text-slate-900 rounded hover:text-amber-500 md:hover:bg-transparent md:hover:text-amber-500 md:p-0 dark:text-amber-200 dark:hover:text-amber-500 md:dark:hover:bg-transparent dark:border-slate-700"}
          > {item}</Link>
        </li>
      ))}
    </ul>
  </div>
);


export default Navbar;
