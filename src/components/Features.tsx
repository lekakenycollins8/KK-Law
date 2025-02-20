import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { features } from "../constants/data";


const Features = () => {
  const MAX_DESCRIPTION_LENGTH = 100;

  return (
    <section className="from-[#111620] bg-gradient-to-tr via-[#151C25] to-[#12151F]">
     
      <div className="px-4  py-14   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
        <div className="flex flex-col items-center justify-center  gap-y-4 md:items-start ">
          <h1 className="text-sm tracking-widest font-light text-primaryBeige">
            AREAS OF PRACTICE
          </h1>

          <div className="flex items-end gap-4">
            <h1 className="text-primaryWhite text-3xl font-serif tracking-wider">
              Legal Services
            </h1>

            <span className="w-10 h-[1px] mb-2 flex bg-gradient-to-r from-primaryBeige  to-lightBeige rounded-tr-lg rounded-bl-lg"></span>
          </div>
        </div>
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-5 rounded-tl-[30px] rounded-br-[30px]  duration-300 transform bg-[#262D3D] hover:-translate-y-2 flex flex-col items-center justify-center gap-y-4 md:py-14 group"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-opacity-20 bg-[#C1B696]">
                <feature.icon
                  size={25}
                  className=" text-standardBeige group-hover:animate-bounce"
                />
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-white text-center">
                {feature.title}
              </h6>
              <p className="text-sm w-full text-primaryWhite opacity-50 text-center max-w-[300px]">
                {(feature.description?.length ?? 0) > MAX_DESCRIPTION_LENGTH
                  ? `${(feature.description ?? '').slice(
                      0,
                      MAX_DESCRIPTION_LENGTH,
                    )}... `
                  : feature.description ?? ''}
              </p>
              <Link
                to={`/practice-areas/${feature.id}`}
                className="text-base  text-standardBeige inline-flex items-center justify-center"
              >
                Learn more
                <MdKeyboardArrowRight className="" size={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
