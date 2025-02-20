import { Menu, Transition } from "@headlessui/react";
import { Fragment} from "react";
import { features, featuresInterface } from "./../constants/data";
import { Link } from "react-router-dom";

interface PracticesDropdownProps {
  isScrolled: boolean;
}

const PracticesDropdown = ({ isScrolled }: PracticesDropdownProps) => {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className={`transition-colors duration-200 hover:text-teal-accent-400 tracking-wide inline-flex w-full justify-center rounded-md px-4 py-2  font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75  ${!isScrolled ? 'text-gray-100': 'text[#B8967E]'}`}>
            Practice Areas
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-40 mt-2 py-2 p-2  w-72 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
            {/* dropdown items */}
            {features.map((feature: featuresInterface) => (
              <Link to={`/practice-areas/${feature.id}`} key={feature.id}>
                <div className="text-[#344054] text-base font-extralight p-2 transition-all ease-in-out duration-150   hover:bg-primaryBeige hover:text-primaryWhite rounded-md">
                  <Menu.Item>
                    <p className="px-2">{feature.title}</p>
                  </Menu.Item>
                </div>
              </Link>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default PracticesDropdown;
