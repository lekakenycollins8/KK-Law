import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div className="">
      <Menu>
        {({ open }) => (
          <div className="relative ">
            <Menu.Button>
              <span className="h-8 w-8 rounded-[4px] flex items-center justify-center bg-gray-500">
                {open ? (
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M12 4L4 12"
                      stroke="#FFFFFF"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4 4L12 12"
                      stroke="#FFFFFF"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg className="w-5 text-white" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                    />
                  </svg>
                )}
              </span>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute px-2 py-2 right-0 mt-4 translate-y-1 w-[300px] shadow-profile-shadow bg-[#FFFFFF] rounded-[8px] origin-top-right divide-y divide-gray-100 border border-[#DDD]   focus:outline-none">
                <div className="">
                  <NavLink to="/" className="">
                    {({ isActive }) => (
                      <>
                        <Menu.Item
                          as={`div`}
                          className={`p-3 text-[#344054] text-base font-extralight tracking-wide rounded-md hover:bg-standardBeige hover:text-primaryWhite ${
                            isActive && "bg-standardBeige text-primaryWhite"
                          } }`}
                        >
                          <span className="">Home</span>
                        </Menu.Item>
                      </>
                    )}
                  </NavLink>
                </div>

                {/* practice-areas */}
                <div className="">
                  <NavLink to="/practice-areas" className="">
                    {({ isActive }) => (
                      <>
                        <Menu.Item
                          as={`div`}
                          className={`p-3 text-[#344054] text-base font-extralight tracking-wide rounded-md hover:bg-standardBeige hover:text-primaryWhite ${
                            isActive && "bg-standardBeige text-primaryWhite"
                          } }`}
                        >
                          <span className="">Practice Areas</span>
                        </Menu.Item>
                      </>
                    )}
                  </NavLink>
                </div>
                <div className="">
                  <NavLink to="/our-team" className="">
                    {({ isActive }) => (
                      <>
                        <Menu.Item
                          as={`div`}
                          className={`p-3 text-[#344054] text-base font-extralight tracking-wide rounded-md hover:bg-standardBeige hover:text-primaryWhite ${
                            isActive && "bg-standardBeige text-primaryWhite"
                          } }`}
                        >
                          <span className="">Legal Team</span>
                        </Menu.Item>
                      </>
                    )}
                  </NavLink>
                </div>

                {/* about-us */}

                <div className="">
                  <NavLink to="/about-us" className="">
                    {({ isActive }) => (
                      <>
                        <Menu.Item
                          as={`div`}
                          className={`p-3 text-[#344054] text-base font-extralight tracking-wide rounded-md hover:bg-standardBeige hover:text-primaryWhite ${
                            isActive && "bg-standardBeige text-primaryWhite"
                          } }`}
                        >
                          <span className="">About Us</span>
                        </Menu.Item>
                      </>
                    )}
                  </NavLink>
                </div>
                <div className="">
                  <NavLink to="/contact-us" className="">
                    {({ isActive }) => (
                      <>
                        <Menu.Item
                          as={`div`}
                          className={`p-3 text-[#344054] text-base font-extralight tracking-wide rounded-md hover:bg-standardBeige hover:text-primaryWhite ${
                            isActive && "bg-standardBeige text-primaryWhite"
                          } }`}
                        >
                          <span className="">Contacts Us</span>
                        </Menu.Item>
                      </>
                    )}
                  </NavLink>
                </div>
              </Menu.Items>
            </Transition>
          </div>
        )}
      </Menu>
    </div>
  );
};

export default MobileMenu;
