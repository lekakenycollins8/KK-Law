import { AiOutlineMail } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { PiLinkedinLogoThin } from "react-icons/pi";
import { AiOutlineRight } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-primaryNavyBlue">
      <div className=" px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex justify-start flex-col gap-y-10  lg:gap-y-20 bg-primaryNavyBlue">
        <div className="container px-6 py-4 mx-auto">
          <div className=" border-b border-primaryBeige py-12 grid grid-cols-1 gap-8  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <div className="flex  items-center gap-x-3">
                <p className="font-medium text-lg text-primaryWhite">
                  Our Address
                </p>
                <span className="w-10 h-[1px] mb-2 flex bg-gradient-to-r from-primaryBeige  to-lightBeige rounded-tr-lg rounded-bl-lg mt-5 pt-1"></span>
              </div>

              <div className="flex flex-col items-start leading-loose pt-4 text-primaryWhite">
                <p className="text-lightBeige text-sm">
                  Mayfair Business Center 2nd Floor suite 6
                </p>
              </div>
            </div>
            <div>
              <div className="flex  items-center gap-x-3">
                <p className="font-medium text-lg text-primaryWhite">
                  Connect With us
                </p>
                <span className="w-10 h-[1px] mb-2 flex bg-gradient-to-r from-primaryBeige  to-lightBeige rounded-tr-lg rounded-bl-lg mt-5 pt-1"></span>
              </div>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className=" text-primaryWhite text-transition-colors duration-300 hover:text-primaryBeige flex  items-center justify-center gap-x-2 text-sm">
                  <span className="text-primaryBeige text-sm">
                    <AiOutlineMail size={18} />
                  </span>
                  info@kk.gmail.com
                </p>
                <p className=" text-primaryWhite text-transition-colors duration-300 hover:text-primaryBeige flex  items-center justify-center gap-x-2 text-sm">
                  <span className="text-primaryBeige  ">
                    <PiLinkedinLogoThin size={18} />
                  </span>
                  @KK_LawFirm
                </p>
                <p className=" text-primaryWhite text-transition-colors duration-300 hover:text-primaryBeige flex  items-center justify-center gap-x-2 text-sm">
                  <span className="text-primaryBeige ">
                    <CiTwitter size={18} />
                  </span>
                  @KKLawFirm
                </p>
              </div>
            </div>

            <div>
              <div className="flex  items-center gap-x-3">
                <p className="font-medium text-lg text-primaryWhite">
                  Our Address
                </p>
                <span className="w-10 h-[1px] mb-2 flex bg-gradient-to-r from-primaryBeige  to-lightBeige rounded-tr-lg rounded-bl-lg mt-5 pt-1"></span>
              </div>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className=" text-primaryWhite text-transition-colors duration-300 hover:text-primaryBeige flex  items-center justify-center gap-x-2">
                  <Link
                    to="/"
                    className="text-primaryBeige flex  items-center justify-center gap-x-2 "
                  >
                    <AiOutlineRight size={15} />
                    <span className="text-sm"> Home</span>
                  </Link>
                </p>
                <p className=" text-primaryWhite text-transition-colors duration-300 hover:text-primaryBeige flex  items-center justify-center gap-x-2">
                  <Link
                    to="about-us"
                    className="text-primaryBeige flex  items-center justify-center gap-x-2 "
                  >
                    <AiOutlineRight size={15} />
                    <span className="text-sm"> About Us</span>
                  </Link>
                </p>
                <p className=" text-primaryWhite text-transition-colors duration-300 hover:text-primaryBeige flex  items-center justify-center gap-x-2">
                  <Link
                    to="our-team"
                    className="text-primaryBeige flex  items-center justify-center gap-x-2 "
                  >
                    <AiOutlineRight size={15} />
                    <span className="text-sm">Legal Team</span>
                  </Link>
                </p>
                <p className=" text-primaryWhite text-transition-colors duration-300 hover:text-primaryBeige ">
                  <Link
                    to="contact-us"
                    className="text-primaryBeige flex  items-center justify-center gap-x-2 "
                  >
                    <AiOutlineRight size={15} />
                    <span className="text-sm"> Contact us</span>
                  </Link>
                </p>
              </div>
            </div>

            <div>
              <div className="flex  items-center gap-x-3">
                <p className="font-medium text-lg text-primaryWhite">
                  Our NewsLetter
                </p>
                <span className="w-10 h-[1px] mb-2 flex bg-gradient-to-r from-primaryBeige  to-lightBeige rounded-tr-lg rounded-bl-lg mt-5 pt-1"></span>
              </div>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className=" text-primaryWhite text-transition-colors duration-300 hover:text-primaryBeige flex  items-center justify-center gap-x-2">
                  Signup for our latest news & articles.
                </p>
                <form className="w-full relative flex flex-col mt-4 md:flex-row">
                  <input
                    placeholder="Email Address"
                    required
                    type="text"
                    className="relative flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-transparent border-b border-primaryBeige shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline text-white" // Add text-white or any other color class here
                  />
                  <button
                    type="submit"
                    className="absolute -right-7 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-primaryBeige transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    <FiSend />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <p className="mt-4 text-sm text-primaryWhite sm:mt-0 dark:text-gray-300">
              © Copyright 2023. All rights reserved.
            </p>
            <div className="text-primaryWhite flex gap-x-1 py-2">
              <CiFacebook size={20} />
              <CiTwitter size={20} />
              <PiLinkedinLogoThin size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
