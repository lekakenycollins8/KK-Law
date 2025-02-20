import { NavLink } from "react-router-dom";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import PracticesDropdown from "./PracticesDropdown";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import LogoWithBackground from "../assets/images/kkkk.png";

export const Navbar = () => {

  const [isScrolled, setScrolled] = useState(false);


	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 6) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener('scroll', toggleVisibility);

		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

  return (
    <div className={` ${isScrolled ? 'bg-white shadow-2xl' :'heroSection border-b border-Brown-shadow'}`}>
      <div className="px-4  py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between ">
          <div className="flex  items-center ">
            <a
              href="/"
              aria-label="Company"
              title="Company"
              className=" inline-flex items-center  "
            >
              <img
                className=" w-auto md:w-[100px] max-w-xs h-[90px] text-teal-accent-400 mr-11 "
                src= {LogoWithBackground }
                // src='https://res.cloudinary.com/dsvqxl3uk/image/upload/v1697460881/KK_1_aotw4l.png'
                alt="logo"
              />
            </a>
            <ul className=" items-center hidden space-x-8 lg:flex">
              <li>
                <NavLink
                  to={`/`}
                  className={`font-medium tracking-wide ${!isScrolled ? 'text-gray-100': 'text[#B8967E]'} transition-colors duration-200 hover:text-teal-accent-400`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/about-us`}
                  className={`font-medium tracking-wide ${!isScrolled ? 'text-gray-100': 'text[#B8967E]'} transition-colors duration-200 hover:text-teal-accent-400`}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/our-team`}
                  className={`font-medium tracking-wide ${!isScrolled ? 'text-gray-100': 'text[#B8967E]'} transition-colors duration-200 hover:text-teal-accent-400`}
                >
                  Legal Team
                </NavLink>
              </li>
              <li >
                <PracticesDropdown isScrolled={isScrolled} />
              </li>
              <li>
                <NavLink
                  to={`/contact-us`}
                  className={`font-medium tracking-wide ${!isScrolled ? 'text-gray-100': 'text[#B8967E]'} transition-colors duration-200 hover:text-teal-accent-400`}
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className="flex items-center justify-between  space-x-1 lg:flex">
            <li    className={` flex items-center justify-between  space-x-2 lg:flex font-medium tracking-wide ${!isScrolled ? 'text-gray-100': 'text[#B8967E]'} transition-colors duration-200 hover:text-teal-accent-400`}>
              <span className="px-1"> <BsFillTelephoneForwardFill /></span> 
              <span className="text-sm md:text-base"> +(254) 710917472</span>
             
            </li>
          </ul>
          <div className="lg:hidden z-50"> 
          <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
};
