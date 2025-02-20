
type Props = {
  name: string | undefined;
};

const Banner = ({ name }: Props) => {
  return (
    <div className="heroSection w-full  sm:pt-14 sm:pb-9">
      <div className="px-4 py-8 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <h6 className="text-primaryWhite text-2xl text-[42px]">{name}</h6>
      </div>
    </div>
  );
};

export default Banner;
