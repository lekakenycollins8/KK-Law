import BragComponent from './BragComponent';
import { motion } from "framer-motion";

export const Hero = ({scrollToAbout}:any) => {
  return (
    <div className="  px-4  pb-32 lg:pb-0  pt-20 lg:pt-[150px]  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex justify-start flex-col gap-y-10  lg:gap-y-20">
      <div className=" flex flex-col justify-center items-center lg:block z-20">
        <p className="font-[Pacifico] tracking-widest text-[#B8967E] text-center lg:text-start lg:text-xl relative text-base">
          <motion.div
           initial={{ opacity:0 }}
           animate={{ opacity:1 }}
           transition={{ duration: 1, delay: 0.2 }}
          >   
         The Standard, Is Excellence.
          </motion.div>
          
          <span className="absolute h-10 w-10 -translate-x-3 -translate-y-2  -z-20 left-0 sm:-translate-x-6 sm:-translate-y-6 sm:h-36 sm:w-36">
            <svg
              className="fill-secondaryBeige opacity-30 moving-leaf"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              x="0px"
              y="0px"
              fill=""
              viewBox="0 0 100 125"
            >
              <path
                className="moving-path"
                d="M60,10H10v50c0,16.5685425,13.4314575,30,30,30h50V40C90,23.4314575,76.5685425,10,60,10z"
              />
            </svg>
          </span>
        </p>
        <span></span>
        <motion.div
         initial={{ x: -100 }}
         animate={{ x: 0 }}
         transition={{ ease: 'easeOut', duration: 0.5 }}
         style={{ transition: 'transform 0.5s ease-out' }}
        >
        <h1 className=" text-center lg:text-start  text-[32px] lg:text-[70px]  font-medium font-[Marcellus] leading-tight text-lightBeige z-10">
        Let us expertly tailor <br></br>  your   <span className='cus-stroke'>Legal solutions  </span> <br></br>  {" "}
        </h1>
        </motion.div>
       
        <motion.div 
        className=" hidden lg:flex mt-5"
        initial={{ y: -100 }}
         animate={{ y: 0 }}
         transition={{ ease: 'easeOut', duration: 0.5 }}
         style={{ transition: 'transform 0.5s ease-out' }}
        >
          <span className="bg-primaryWhite px-4 py-3 rounded-tl-2xl">
            {/* <MdOutlineAdd size={22} className="inline-block text-black" /> */}
          </span>
          <button
            type="button"
            className="px-4 py-3 bg-standardBeige text-[#FDFCFB] uppercase rounded-br-2xl"
            onClick={scrollToAbout}
          >
            <span>learn more</span>
          </button>
        </motion.div>
      </div>
      <div className='hidden lg:block'>
      <BragComponent />

      </div>
    </div>
  );
}
