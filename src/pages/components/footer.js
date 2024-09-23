import React from "react";
import logo from "../assets/logo.png";
import { Fade } from "react-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer className="bg-slate-200 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <Fade up>
          <div className="md:flex md:justify-between">
            <div className="mb-4 md:mb-0">
              <Logo />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <About />
              <Services />
              <Schedules />
            </div>
          </div>
          <hr className="my-3 border-slate-200 sm:mx-auto dark:border-slate-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-slate-400 sm:text-center ">© 2024 <a href="/home" class="hover:underline no-underline text-slate-500 dark:text-slate-400 ">Royal-Delivery™</a>. All Rights Reserved.
            </span>
            <div className="flex  sm:justify-center sm:mt-0">
              <FooterSocialLinks />
            </div>
          </div>
        </Fade>
      </div>
    </footer>
  );
}

const List = ({ items }) => (
  <ul className="text-slate-500 dark:text-slate-400 font-medium">
    {items.map((item, index) => (
      <li key={index} className="mb-4">
        <a href={item.href} className={item.className}>
          {item.text}
        </a>
      </li>
    ))}
  </ul>
);

const Section = ({ title, items }) => (
  <div>
    <h2 className="mb-6 text-sm font-semibold text-slate-900 uppercase dark:text-white">
      {title}
    </h2>
    <List items={items} />
  </div>
);

const Logo = () => (
  <a href="/home" className="flex items-center no-underline">
    <img src={logo} className="h-8 me-3" alt="Royal Delivery Logo" />
    <span className="self-center text-xl font-semibold whitespace-nowrap text-amber-500 dark:text-amber-200 hover:text-slate-900 dark:hover:text-amber-500">
      Royal Delivery
    </span>
  </a>
);

const About = () => (
  <Section
    title="About us"
    items={[
      { href: "/menu", text: "Menu", className: "hover:text-amber-200 no-underline text-slate-500 dark:text-slate-400 font-medium" },
      { href: "#", text: "Price", className: "hover:text-amber-200 no-underline text-slate-500 dark:text-slate-400 font-medium" }
    ]}
  />
);

const Services = () => (
  <Section
    title="Services"
    items={[
      { href: "/Order-online", text: "Delivery", className: "hover:text-amber-200 no-underline text-slate-500 dark:text-slate-400 font-medium" },
      { href: "#", text: "Packaging", className: "hover:text-amber-200 no-underline text-slate-500 dark:text-slate-400 font-medium" }
    ]}
  />
);

const Schedules = () => (
  <Section
    title="Schedules"
    items={[
      { href: "#", text: "Sunday - Saturday", className: "hover:underline no-underline text-slate-500 dark:text-slate-400 font-medium" },
      { href: "#", text: "7:30 AM - 10:30 PM", className: "hover:underline no-underline text-slate-500 dark:text-slate-400 font-medium" },
      { href: "mailto:royaldelivery@gmailcom", text: "royaldelivery@gmail.com", className: "hover:underline no-underline text-slate-500 dark:text-slate-400 font-medium" }
    ]}
  />
);

const FooterSocialLinks = () => (
  <div className="flex">
    <a href="https://www.facebook.com/Royal_Delivery" target="_blank" rel="noopener noreferrer" className="no-underline cursor-pointer mx-4 text-amber-700 hover:text-amber-300">
      <FontAwesomeIcon icon={faFacebookF} size='lg' />
    </a>
    <a  href="https://t.me/RoyalDelivery1" target="_blank" rel="noopener noreferrer" className="no-underline cursor-pointer mx-4 text-amber-700 hover:text-amber-300">
      <FontAwesomeIcon icon={faTelegramPlane} size='lg' />
    </a>
    <a  href="mailto:royaldelivery@gmail.com" className="no-underline cursor-pointer mx-4 text-amber-700 hover:text-amber-300">
      <FontAwesomeIcon icon={faEnvelope} size='lg' />
    </a>
    <a href="https://www.instagram.com/Relivery_Delivery" target="_blank" rel="noopener noreferrer" className="no-underline cursor-pointer mx-4 text-amber-700 hover:text-amber-300">
      <FontAwesomeIcon icon={faInstagram} size='lg' />
    </a>

  </div>
);

export default Footer;
