import{BsTrophy} from 'react-icons/bs';
import {IoMdTime} from 'react-icons/io';
import{SlBadge} from 'react-icons/sl';
import{PiDotsNineLight} from 'react-icons/pi'
import { motion } from "framer-motion";

export const OurHistory = () => {
  return (
    <div className="px-4   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex justify-start flex-col gap-y-10  lg:gap-y-20">
      <div className=" pb-3 pt-20 flex items-center flex-col gap-y-3">
        <div className="flex justify-center items-center gap-2">
          <span className="w-6 h-4 flex bg-gradient-to-r from-primaryBeige  to-lightBeige rounded-tr-lg rounded-bl-lg"></span>
          <h1 className=" text-base lg:text-xl text-primaryBeige font-semibold mb-3">
            HISTORY OF KK & ASSOCIATES LAW
          </h1>
          <span className="w-6 h-4 flex bg-gradient-to-r to-primaryBeige  from-lightBeige rounded-tr-lg rounded-bl-lg"></span>
        </div>
        <h6 className=" text-[15px] lg:text-[32px] text-center lg:text-start capitalize">
          We Have a Great History of  How  We Started.
        </h6>
      </div> 

      <div className="lg:px-16 px-2 py-10 ">
        <div className="flex w-full items-center  flex-col-reverse lg:flex-row ">
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ ease: 'easeOut', duration: 1.0 }}
            style={{ transition: 'transform 0.5s ease-out' }}
            className=" w-full  lg:w-1/2 py-8 px-2  lg:px-10 shadow-lg rounded hover:border-2  hover:border-primaryBeige">
            <h5 className="text-[25px] lg:text-[28px] text-center lg:text-start pb-3">The Concept was Born</h5>
            <div
             >
            <p className="text-[#797979] text-justify">
             The idea that would become The Firm, KK & Associates Law, took root, igniting a journey into the realm of legal excellence. From that pivotal moment, our mission has been unwavering: to deliver top-tier legal services marked by integrity, dedication, and professionalism
            </p>
            </div>    
          </motion.div>
          <span className="border-2  border-dashed border-primaryBeige py-5 lg:py-28 mx-6"></span>
          <div className=" relative w-full lg:w-1/2 px-10 py-2 lg:py-20  flex items-center justify-center  lg:justify-start  ">
            <div className=' hidden lg:block relative -left-[93px] w-14 h-14 bg-standardBeige rounded-full'>
            <BsTrophy size={20} className='absolute left-5 top-5 z-50 text-primaryWhite '/>
            </div>
            <p className="text-[26px] flex justify-center items-center  font-semibold text-[#262626]">
            <span className="hidden lg:block  w-16 h-[5px] mb-2 lg:flex bg-gradient-to-r from-primaryBeige  to-lightBeige rounded-tr-lg rounded-bl-lg"></span>
              YEAR 2014
            </p>
          </div>
        </div>
        <div className="flex w-full items-center  flex-col lg:flex-row ">
        <div className=" w-full lg:w-1/2 px-10 py-2 lg:py-20  flex items-center justify-center  lg:justify-end ">
          
            <p className="text-[26px] flex justify-center items-center font-semibold text-[#262626]">
              {" "}
              JUNE 2017
              <span className="hidden  w-16 h-[5px] mb-2 lg:flex bg-gradient-to-r from-primaryBeige  to-lightBeige rounded-tr-lg rounded-bl-lg"></span>
            </p>
            <div className=' hidden lg:block relative left-[93px] w-14 h-14 bg-standardBeige rounded-full'>
            <IoMdTime size={20} className='absolute left-5 top-5 z-50 text-primaryWhite '/>
            </div>
          </div>
          <span className="border-2  border-dashed border-primaryBeige py-5 lg:py-28 mx-6"></span>
          <motion.div 
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ ease: 'easeOut', duration: 1.0 }}
          className=" w-full lg:w-1/2 py-6 px-2 lg:px-10 shadow-lg rounded hover:border-2  hover:border-primaryBeige "
            style={{ boxShadow: "-11px 0 55px -8px rgba(0,0,0,.09)" }}>
            <h5 className="text-[25px] lg:text-[28px] text-center lg:text-start pb-3">Transitioned into a Limited Liability Partnership (LLP)</h5>  
            <p className="text-[#797979] text-justify">
            In the year 2017, our vision culminated in the formal establishment of The Firm, KK & Associates Law, as a Limited Liability Partnership. This milestone not only solidified our commitment to legal excellence but also opened new avenues for us to serve our clients with even greater diligence and expertise
            </p>  
            </motion.div>  
          </div> 
          <div className="flex w-full items-center  flex-col-reverse lg:flex-row ">
          <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ ease: 'easeOut', duration: 1.0 }}
          style={{ transition: 'transform 0.5s ease-out', boxShadow: "-11px 0 55px -8px rgba(0,0,0,.09)" }}
            className=" w-full  lg:w-1/2 py-8 px-2 lg:px-10 shadow-lg rounded hover:border-2  hover:border-primaryBeige ">
            <h5 className="text-[25px] lg:text-[28px] text-center lg:text-start  pb-3">Diverse Services Offered</h5>
            
            <p className="text-[#797979] text-justify">
            In 2020, KK & Associates Law expanded its services to operate as a Legal-Services Service Provider, offering expert legal counsel. We also pioneered the integration of IT and Law, enabling us to support multinational corporations with systems analysis, forensic audits, and risk and compliance management. Additionally, we provide Technical Support during Policy and Legislative Formulation and engage in lobbying to protect our clients' interests throughout the policy cycle.            </p>
          </motion.div>
          <span className="border-2  border-dashed border-primaryBeige  py-5 lg:py-28 mx-6"></span>
          <div className=" w-full lg:w-1/2 px-10 py-2 lg:py-20  flex items-center justify-center  lg:justify-start ">
          <div className=' hidden lg:block relative -left-[93px] w-14 h-14 bg-standardBeige rounded-full'>
            <PiDotsNineLight size={20} className='absolute left-5 top-5 z-50 text-primaryWhite '/>
            </div>
            <p className="gap-x-18 flex justify-center items-center text-[26px] font-semibold text-[#262626]">
            <span className="hidden lg:block w-16 h-[5px] mb-2 lgflex bg-gradient-to-r from-primaryBeige  to-lightBeige rounded-tr-lg rounded-bl-lg"></span>
              YEAR 2020
            </p>
          </div>
        </div>
        <div className="flex w-full items-center  flex-col lg:flex-row ">
        <div className=" w-full lg:w-1/2 px-10 py-2 lg:py-20  flex items-center justify-center  lg:justify-end ">
            <p className="text-[26px] flex  justify-center items-center gap-x-3 font-semibold text-[#262626]">
              YEAR 2021
              <span className="hidden w-16 h-[5px] mb-2 lg:flex bg-gradient-to-r from-primaryBeige  to-lightBeige rounded-tr-lg rounded-bl-lg"></span>
            </p>
            <div className=' hidden lg:block relative left-[93px] w-14 h-14 bg-standardBeige rounded-full'>
            <SlBadge size={20} className='absolute left-5 top-5 z-50 text-primaryWhite '/>
            </div>
          </div>
          <span className="border-2  border-dashed border-primaryBeige py-5 lg:py-28 mx-6"></span>
          <motion.div
           initial={{ x: 100 }}
           animate={{ x: 0 }}
           transition={{ ease: 'easeOut', duration: 1.0 }}
           viewport={{ once: false }}
           style={{ transition: 'transform 0.5s ease-out' , boxShadow: "-11px 0 55px -8px rgba(0,0,0,.09)" }}
            className=" w-full  lg:w-1/2 py-8 px-2 lg:px-10 shadow-lg rounded hover:border-2  hover:border-primaryBeige " >
            <h5 className=" text-[25px] lg:text-[28px] text-center lg:text-start pb-3">Experience for Win</h5>
            <p className="text-[#797979] text-justify">
            In 2021, KK & Associates Law excelled in Public Health Human Rights Based Policy & Legislation. We proudly secured empanelment by multiple County Governments and esteemed National and International Development Partners, showcasing our dedication and expertise in shaping impactful policies.
            </p>   
          </motion.div>
          
        </div>


        <div className="flex w-full items-center  flex-col-reverse lg:flex-row ">
          <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ ease: 'easeOut', duration: 1.0 }}
          style={{ transition: 'transform 0.5s ease-out', boxShadow: "-11px 0 55px -8px rgba(0,0,0,.09)" }}
            className=" w-full  lg:w-1/2 py-8 px-2 lg:px-10 shadow-lg rounded hover:border-2  hover:border-primaryBeige ">
            <h5 className="text-[25px] lg:text-[28px] text-center lg:text-start  pb-3">Enhancing Regional Impact Through Policy and Legislative Support</h5>
            
            <p className="text-[#797979] text-justify">
            Strengthened our presence in East and Central Africa through active collaboration with the East African Legislative Assembly, providing support in the development of comprehensive, evidence-based policies and legislative frameworks that prioritize human rights and inclusivity.             </p>
          </motion.div>
          <span className="border-2  border-dashed border-primaryBeige  py-5 lg:py-28 mx-6"></span>
          <div className=" w-full lg:w-1/2 px-10 py-2 lg:py-20  flex items-center justify-center  lg:justify-start ">
          <div className=' hidden lg:block relative -left-[93px] w-14 h-14 bg-standardBeige rounded-full'>
            <PiDotsNineLight size={20} className='absolute left-5 top-5 z-50 text-primaryWhite '/>
            </div>
            <p className="gap-x-18 flex justify-center items-center text-[26px] font-semibold text-[#262626]">
            <span className="hidden lg:block w-16 h-[5px] mb-2 lgflex bg-gradient-to-r from-primaryBeige  to-lightBeige rounded-tr-lg rounded-bl-lg"></span>
              YEAR 2023
            </p>
          </div>
        </div>
        <div className="flex w-full items-center  flex-col lg:flex-row ">
        <div className=" w-full lg:w-1/2 px-10 py-2 lg:py-20  flex items-center justify-center  lg:justify-end ">
            <p className="text-[26px] flex  justify-center items-center gap-x-3 font-semibold text-[#262626]">
              YEAR 2025
              <span className="hidden w-16 h-[5px] mb-2 lg:flex bg-gradient-to-r from-primaryBeige  to-lightBeige rounded-tr-lg rounded-bl-lg"></span>
            </p>
            <div className=' hidden lg:block relative left-[93px] w-14 h-14 bg-standardBeige rounded-full'>
            <SlBadge size={20} className='absolute left-5 top-5 z-50 text-primaryWhite '/>
            </div>
          </div>
          <span className="border-2  border-dashed border-primaryBeige py-5 lg:py-28 mx-6"></span>
          <motion.div
           initial={{ x: 100 }}
           animate={{ x: 0 }}
           transition={{ ease: 'easeOut', duration: 1.0 }}
           viewport={{ once: false }}
           style={{ transition: 'transform 0.5s ease-out' , boxShadow: "-11px 0 55px -8px rgba(0,0,0,.09)" }}
            className=" w-full  lg:w-1/2 py-8 px-2 lg:px-10 shadow-lg rounded hover:border-2  hover:border-primaryBeige " >
            <h5 className=" text-[25px] lg:text-[28px] text-center lg:text-start pb-3">Expanding Global Reach and Building Strategic Partnerships</h5>
            <p className="text-[#797979] text-justify">
            In 2025, we are strengthening our global presence by forging partnerships with international development organizations, including Harm Reduction International and the United States Pharmacopeia (USP), to enhance resilience in pharmaceutical markets and promote opportunities for local manufacturers.

Additionally, we are venturing into new horizons by establishing a physical presence in key global cities—London, León, Melbourne, and Cape Town—further solidifying our commitment to global impact and collaboration.            </p>   
          </motion.div>
          
        </div>
        </div>
   
        
        
      </div>
   
   
  );
};
