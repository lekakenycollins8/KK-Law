import {BsFillBriefcaseFill} from 'react-icons/bs';
import {HiClipboardList} from 'react-icons/hi';
import {GiFist} from 'react-icons/gi';
import {BsShieldLock} from 'react-icons/bs';
import{PiListMagnifyingGlassBold} from 'react-icons/pi';
import {IoIosPeople} from 'react-icons/io';

import { motion } from "framer-motion"

export const Values = () => {
  
    return (
      <div className='bg-primaryWhite'>
        <motion.div  
      className="px-2 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10  bg-opacity-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 2, delay: 0.3 }}
      >
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div> 
          </div>
          
          <div className="flex justify-center items-center gap-2">
        <span className="w-6 h-4 flex bg-gradient-to-r from-primaryBeige  to-lightBeige rounded-tr-lg rounded-bl-lg"></span>
        <h1 className="text-xl text-primaryBeige font-semibold">Our Core Values</h1>
        <span className="w-6 h-4 flex bg-gradient-to-r to-primaryBeige  from-lightBeige rounded-tr-lg rounded-bl-lg"></span>
      </div>
         
        </div>
        <div className=" w-full flex justify-center ">
        <div className="bg-white p-3 md:p-10 flex justify-center items-center w-[90%] md:w-[80%] shadow-2xl">
        <div className="mx-auto grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
          <div className=" border-r pr-3 border-secondaryBeige   lg:px-3 px-2 ">
            <BsFillBriefcaseFill size={20} className='text-standardBeige group-hover:animate-bounce'/>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xl text-primaryBlack  capitalize font-bold font-serif">professionalism</p>
             
            </div>
            <p className="text-justify text-sm text-textColor ">
            At  KK & Associates Law, professionalism is our foundation. We prioritize ethical compliance, client-centered service, and maintaining expertise in the evolving legal field. Timeliness, respect, and accountability are our hallmarks.
            </p>
          </div>
          <div className=" border-r border-secondaryBeige  pr-3   lg:px-3 px-2">
            <HiClipboardList size={20} className='text-standardBeige group-hover:animate-bounce'/>
            <div className="flex items-center justify-between mb-2 ">
              <p className="text-xl text-primaryBlack  capitalize font-bold font-serif">accountabilty</p>
             
            </div>
            <p className="text-textColor text-justify text-sm">
            We uphold the highest standards of responsibility and transparency in our practice. Count on us to take ownership of our actions and decisions, ensuring your trust in our legal services.
            </p>
          </div>
          <div  className=' pr-3 lg:px-3 px-2'>
          <GiFist size={20} className='text-standardBeige group-hover:animate-bounce'/>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xl text-primaryBlack  capitalize font-bold font-serif">Courage in Action</p>
              
            </div>
            <p className="text-textColor text-sm text-justify">
            We embody courage. We fearlessly advocate for your rights, navigating complex legal challenges with determination and resolve. Trust us to be your unwavering advocates for the best outcomes.
            </p>
          </div>
          <div className=" border-r border-secondaryBeige  pr-3  lg:px-3 px-2">
          <hr className=" w-full border-secondaryBeige h-5"/>
          <BsShieldLock size={20} className='text-standardBeige group-hover:animate-bounce'/>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xl text-primaryBlack  capitalize font-bold font-serif">Integrity</p>
             
            </div>
            <p className="text-textColor  text-sm text-justify">
            Integrity is fundamental. We uphold the highest standards of honesty, ethics, and transparency, ensuring your complete confidence in our legal services. Count on our steadfast commitment to act with utmost sincerity in all we do.
            </p>
          </div>
    
          <div className=" border-r border-secondaryBeige   pr-3 lg:px-3 px-2 ">
          <hr className=" w-full border-secondaryBeige h-5"/>
          <IoIosPeople  size={20} className='text-standardBeige group-hover:animate-bounce'/>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xl text-primaryBlack  capitalize font-bold font-serif">Team Work</p>
             
            </div>
            <p className="text-textColor text-sm text-justify">
            Teamwork is essential. We collaborate seamlessly to provide you with comprehensive legal solutions. Our collective efforts ensure that you receive well-rounded advice and representation.
            </p>
          </div>
          <div className="border-r pr-3 border-secondaryBeige   lg:px-3 px-2 ">
          <hr className=" w-full border-secondaryBeige h-5"/>
          <PiListMagnifyingGlassBold size={20} className='text-standardBeige group-hover:animate-bounce'/>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xl text-primaryBlack  capitalize font-bold font-serif">Transparency</p>
             
            </div>
            <p className="text-textColor text-sm text-justify">
            Transparency is paramount. We provide clear explanations of legal processes, ensuring you have a complete understanding of your case. Count on us to consistently maintain open and honest communication in all your legal matters
            </p>
          </div>
          
        </div>
        </div>

        </div>
           
      </motion.div>
      </div>
      
    );
  };
