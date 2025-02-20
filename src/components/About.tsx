// import { MdOutlineAdd } from "react-icons/md";
import { Link } from "react-router-dom";

export const About = () => {

  return (
    
    <div className="px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:px-8  sm:mt-10">
      <div className="flex justify-center items-center gap-2">
        <span className="w-6 h-4 flex bg-gradient-to-r from-primaryBeige  to-lightBeige rounded-tr-lg rounded-bl-lg"></span>
        <h1 className="text-2xl text-primaryBeige font-semibold">About us</h1>
        <span className="w-6 h-4 flex bg-gradient-to-r to-primaryBeige  from-lightBeige rounded-tr-lg rounded-bl-lg"></span>
      </div>
      <div className="p-8  sm:p-16">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <div className="flex items-center gap-2 font-serif sm:gap-4">
              {/* <p className="text-[80px] font-serif font-bold text-standardBeige">
                L
              </p> */}
              {/* <div className="text-start text-primaryBlack fon">
                <p className="text-2xl  text-primaryBlack ">aw Advice</p>
                <p className="text-2xl  text-primaryBlack">For Our Client</p>
              </div> */}
            </div>
            <div className="flex flex-col gap-y-2 w-full max-w-sm">
              <p className="text-xs display-flex text-standardBeige tracking-widest font-bold md:text-md  ">
                WELCOME TO KK & ASSOCIATES,LAW
              </p>
              <p className="text-base font-marcellus text-textColor leading-7 text-justify">
                At KK & Associates Law, we do not measure our success by comparison, 
                but by our own standard. The strength of our relationships defines who we are. 
                We realize that the legal landscape has changed, and we are leading the way 
                with innovation and a cutting-edge business model.


              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <p className="mb-4 text-base leading-7 text-justify font-marcellus text-primaryTextColor">
            In these times, when many firms have struggled or have been forced to scale back, KK has experienced record growth. 
            Our dedication to our clients has made the difference. 
            We understand that over the years, the needs and expectations of clients have changed. 
            We strive to keep ahead of this change with a relentless focus on emerging trends. 
            Most importantly, we tirelessly seek out new ways to add value by understanding our clients’ business needs and ambitions.
            </p>
            <div className="flex mt-5 group cursor-pointer justify-center lg:justify-start">
              <span className="bg-black px-4 py-3 rounded-tl-2xl">
                {/* <MdOutlineAdd
                  size={22}
                  className="inline-block text-primaryWhite group-hover:rotate-90 transition-all duration-300 ease-in-out"
                /> */}
              </span>
              <Link
                to="about-us"
                type="button"
                className="px-4 py-3 bg-standardBeige text-[#FDFCFB] uppercase rounded-br-2xl"
              >
                <span>learn more</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
