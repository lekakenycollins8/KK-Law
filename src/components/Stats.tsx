function Stats() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="hidden md:block mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
          <p className="mb-5   text-justify font-gogh-regular-italic text-[#92949C]">
            We engage in all aspects of corporate and commercial practice,
            conveyancing and tax law, migration law, banking, company law and we
            are also a leading firm in commercial and civil litigation.
          </p>
        </div>
        <div className="lg:w-1/2">
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                <img
                  src="https://madhanilaw.com/file/uploads/2015/04/icon_1.svg"
                  alt=""
                />
              </div>
              <h6 className="text-3xl  text-md text-deep-purple-accent-400 text-[#CBA860] ">
                1500
              </h6>
              <div className="flex justify-center pt-1 text-[#CBA860] mb-1">
                <hr className=" w-[40px] bg-[#CBA860]  h-[2px]" />
              </div>
              <p className="mb-2  text-md text-[#92949C]">Trusted Clients</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                <img
                  src="https://madhanilaw.com/file/uploads/2015/04/icon_2.svg"
                  alt=""
                />
              </div>
              <h6 className=" text-md  text-deep-purple-accent-400 text-3xl text-[#CBA860]">
                99%
              </h6>
              <div className="flex justify-center pt-1 text-[#CBA860] mb-1">
                <hr className=" w-[40px] bg-[#CBA860]  h-[2px]" />
              </div>

              <p className="mb-2 text-[#92949C] text-md">Successfull Cases</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                <img
                  src="https://madhanilaw.com/file/uploads/2015/04/icon_3-1.png"
                  alt=""
                />
              </div>
              <h6 className="text-deep-purple-accent-400 text-3xl text-[#CBA860] ">
                10
              </h6>
              <div className="flex justify-center pt-1 text-[#CBA860] mb-1">
                <hr className=" w-[40px] bg-[#CBA860]  h-[2px]" />
              </div>
              <p className="mb-2  text-md text-[#92949C]">Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
