import { Link } from "react-router-dom";
import { team} from "../../constants/data";

const Team = () => {
  const maxLength = 80;

  return (
    <div className="w-full">
      <div className="py-5 pl-3 flex flex-col md:pl-20">
        <p className="font-customMedium text-xl">Know Our Team</p>
        <span className="w-24 h-[2.5px] mt-3 flex bg-gradient-to-r from-primaryBeige to-lightBeige rounded-tr-lg rounded-bl-lg"></span>
      </div>
      <div className="flex flex-col justify-center items-center px-4 py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:max-w-screen-lg">
          {team.map((member) => (
            <div key={member.id} className="grid sm:grid-cols-3">
              <div className="w-full lg:max-w-[300px] rounded-lg overflow-hidden">
                <picture>  
                  <source media="(max-width: 640px)" srcSet={member.profile_detail_img} />
                  <source media="(min-width: 641px)" srcSet={member.profile_img} />
                  <img
                    className="w-full object-cover object-center h-full"
                    src={member.profile_img} 
                    alt={member.name}
                  />
                </picture>
              </div>
              <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                <p className="text-lg font-bold capitalize">{member.name}</p>
                <p className="mb-4 text-xs text-gray-800 capitalize">
                  {member.major}
                </p>
                <p className="mb-4 text-sm tracking-wide text-gray-800">
                  {member.desc.length > maxLength
                    ? `${member.desc.slice(0, maxLength)}...`
                    : member.desc}
                </p>
                <div className="flex items-center space-x-3">
                  <Link
                    to={`member/${member.name}`}
                    className="text-gray-600 capitalize transition-colors duration-300 hover:text-deep-purple-accent-400 py-2 px-4 rounded-lg border border-gray-700"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
