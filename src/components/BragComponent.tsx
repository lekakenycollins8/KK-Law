import { BsSpeedometer2 } from "react-icons/bs";
import { SlNotebook } from "react-icons/sl";
import { MdOutlineVerifiedUser } from "react-icons/md";

const bragArray = [
  {
    icon: BsSpeedometer2,
    title: "100% Success Rate",
    description:
      "Dedicated to Achieving Excellence at Every Turn, We Ensure Your Legal Victories with Unwavering Commitment",
  },
  {
    icon: SlNotebook,
    title: "Expert Legal Services",
    description:
      " Navigating complexities with finesse, our legal experts safeguard your interests with precision and care.",
  },
  {
    icon: MdOutlineVerifiedUser,
    title: "Highly Recommend",
    description:
      " Trusted by many, our legal prowess guarantees unmatched advocacy and solutions tailored just for you.",
  },
];

function BragComponent() {
  return (
    <div className="pb-6  grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
      {bragArray.map((brag) => (
        <div className="py-5 flex flex-col  px-3 justify-center  duration-300 transform bg-transparent border-t border-Brown-shadow  hover:-translate-y-2">
          <div className="flex flex-col items-start  justify-center  text-primaryWhite  ">
            <div className="flex gap-x-5 pb-3 items-center">
              <p className=" hover:animate-spin text-[32px]  hover:text-primaryBeige font-bold text-primaryWhite rounded-full ">
                <brag.icon />
              </p>
              <p className="text-[26px] font-marcellus  leading-5">
                {brag.title}
              </p>
            </div>
            <p className=" text-[15px] font-gogh-regular text-justify  text-primaryWhite">
              {brag.description}{" "}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BragComponent;
