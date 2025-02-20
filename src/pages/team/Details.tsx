import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { TeamInterface, features, team } from "../../constants/data";
// import MyForm from "../../components/MyForm";

const Details = () => {
  const [member, setMember] = useState<TeamInterface>();
  const { name } = useParams<{ name: string }>();

  const navigate = useNavigate();

  const redirectTo = (featureId: number) => {
    navigate(`/practice-areas/${featureId}`);
  };
  const getTeam = (name: string) => {
    const member = team.find(
      (team: TeamInterface) => team.name === name,
    ) as TeamInterface;
    setMember(member);
  };
  useEffect(() => {
    getTeam(name || "");
  }, [name]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="container mt-8 pb-10 mx-auto">
        <div className="w-full flex gap-8 flex-wrap">
          <div className="w-full lg:max-w-[300px] rounded-lg ">
            <img
              alt="img"
              className="w-full lg:h-auto h-100 object-cover object-center"
              src={member?.profile_detail_img}
            />
            <div className="w-full bg-white py-4 border p-4 border-[#DDD]">
              <h1 className="text-base font-semibold">{member?.name}</h1>
              <h1 className="text-gray-900 text-xl title-font font-medium mt-3">
                Area of practice
              </h1>

              <div className="flex flex-col gap-y-2 mt-2">
                {member?.practices.map((practice, index) => (
                  <h2
                    key={index}
                    className="text-sm font-customRegular text-gray-500 tracking-widest"
                  >
                    {practice}
                  </h2>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:max-w-[500px]">
            <p className="leading-relaxed">{member?.desc}</p>
            {/* <MyForm /> */}
          </div>
          <div className="w-full lg:max-w-[300px]">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-gray-900 font-semibold text-lg">
                Practice Areas
              </h1>
              <span className="flex w-full relative items-center h-[1.4px] bg-[#ddd]">
                <span className="w-8 flex absolute left-0 h-[1.4px] bg-[#333333]"></span>
              </span>
              <div className="w-full flex flex-col gap-y-2 mt-4">
                {features.map((feature, index) => (
                  <div
                    onClick={() => redirectTo(feature.id)}
                    key={index}
                    className="w-full py-4 cursor-pointer px-4 bg-[#EEEFEE] font-customRegular hover:bg-[#B8967E] hover:text-primaryWhite"
                  >
                    <h1>{feature.title}</h1>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-y-2 mt-10">
              <h1 className="text-gray-900 font-semibold text-lg">About Us</h1>
              <span className="flex w-full relative items-center h-[1.4px] bg-[#ddd]">
                <span className="w-8 flex absolute left-0 h-[1.4px] bg-[#333333]"></span>
              </span>

              <div className="w-full mt-4 flex flex-col gap-y-6">
                <p className="text-base text-textColor">
                  KK & Associates Law, is a distinguished legal firm in Kenya. We've
                  expanded our services to cater to Kenya's legal landscape.
                </p>
                <Link to={"/about-us"}>
                  <button className="px-8 py-3 font-customBold bg-standardBeige text-[#FDFCFB] uppercase rounded-br-2xl rounded-tl-2xl">
                    <span>learn more</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
