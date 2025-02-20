import{useEffect} from 'react'
import { CiMapPin } from "react-icons/ci";
import{SlEarphonesAlt} from 'react-icons/sl'
import Header from "../../components/sharedComponents/Header";

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);

  return (
    <section className="mx-auto    ">
      <Header title='Contact Us'/>
      <div className='flex justify-center items-center'>
      <div className="container  dark:bg-gray-900 px-6 py-12 mx-auto pt-20 ">
        <div className=" flex flex-col gap-y-2 items-center lg:items-center mb-5 mx-auto ">
          <div className="flex  items-center gap-2">
            <span className="w-6 h-4 flex bg-gradient-to-r from-primaryBeige  to-lightBeige rounded-tr-lg rounded-bl-lg"></span>
            <h1 className="text-xl text-primaryBeige font-semibold">
              Get in Touch
            </h1>
            <span className="w-6 h-4 flex bg-gradient-to-r to-primaryBeige  from-lightBeige rounded-tr-lg rounded-bl-lg"></span>
          </div>
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            Contact Information
          </h1>
        </div>

        <div className="  flex flex-col lg:flex-row gap-x-4 gap-y-7  justify-center">
          <div className="  flex  h-full flex-col lg:flex-row gap-x-4 gap-y-7">
            <div
              className=" flex flex-col items-center justify-center border hover:border-standardBeige px-2 rounded-md   w-full lg:w-1/2 py-5"
              style={{ boxShadow: "-11px 0 55px -8px rgba(0,0,0,.09)" }}
            >
              <span className="inline-block p-7 text-primaryBeige  border border-primaryBeige rounded-full bg-transparent hover:animate-bounce">
                <CiMapPin className='text-standardBeige' />
              </span>

              <h2 className="mt-4  text-[30px] text-[#262626]">
                Location
              </h2>
           
              <p className="mt-2 text-medium text-[#797979] text-center">
              Mayfair Business Center 2nd Floor suite 6

              </p>
            </div>

            <div
             className=" w-full lg:w-1/2 flex flex-col items-center justify-center border hover:border-standardBeige px-2 rounded-md py-5 "
              style={{ boxShadow: "-11px 0 55px -8px rgba(0,0,0,.09)" }}
            >
              <span className="inline-block p-7 text-primaryBeige  border border-primaryBeige rounded-full bg-transparent hover:animate-bounce">
                <SlEarphonesAlt size={20}  className='text-standardBeige'/>
              </span>

              <h2 className="mt-4  text-[30px] text-[#262626]">
                Support
              </h2>
              <p className="mt-2 text-medium text-[#797979] text-center">
                Mon-Fri from 8am to 5pm.
              </p>
              <p className="mt-2 text-sm text-[#797979] ">
                + (254) 710917472
              </p>
            </div>
          </div>

          <div className="p-4 py-6 rounded-lg bg-lightBeige md:p-8">
            <form>
              <div>
                <div className="flex  items-center gap-2">
                  <span className="w-6 h-4 flex bg-gradient-to-r from-primaryBeige  to-lightBeige rounded-tr-lg rounded-bl-lg"></span>
                  <h1 className=" text-sm lg:text-xl text-primaryBeige font-semibold">
                    HAVE ANY QUESTION?{" "}
                  </h1>
                  <span className="w-6 h-4 flex bg-gradient-to-r to-primaryBeige  from-lightBeige rounded-tr-lg rounded-bl-lg"></span>
                </div>
                <p className=" text-[30px] lg:text-[40px] capitalize font-Marcellus text-[#262626]">
                  Drop Us A Line
                </p>
              </div>
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <input
                    type="text"
                    placeholder="Name "
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-transparent border-b border-standardBeige  dark:text-gray-300 "
                  />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <input
                    type="Number"
                    placeholder="Phone"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-transparent border-b border-standardBeige  dark:text-gray-300"
                  />
                </div>
              </div>

              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-transparent border-b border-standardBeige  dark:text-gray-300"
                />
              </div>

              <div className="w-full mt-4">
                <textarea
                  className="block h-20 w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-transparent border-b border-standardBeige  dark:text-gray-300"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="button"
                className=" mt-7 px-4 py-3 bg-standardBeige text-[#FDFCFB] uppercase rounded-br-2xl rounded-tl-2xl"
              >
                <span>learn more</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
      <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-[400px] mt-10">
  <iframe
    width="100%"
    height="100%"
    frameBorder="0"
    title="map"
    scrolling="no"
    src="https://www.google.com/maps/place/Mayfair+Business+Centre/@-1.2621927,36.8063857&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
  ></iframe>
</div>
    </section>
  );
};

export default Contacts;
