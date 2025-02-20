function Header({ title }: any) {
  return (
    <div className="heroSection w-full  flex  flex-col justify-center items-center pt-14 pb-9">
      <h6 className="text-primaryWhite text-[42px]">{title}</h6>
      <div className=" flex text-primaryWhite gap-x-4 items-center ">
        <p className="text-[15px] font-medium">Home</p>
        <span className="w-6 h-4 flex bg-gradient-to-r to-primaryBeige  from-lightBeige rounded-tr-lg rounded-bl-lg"></span>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Header;
