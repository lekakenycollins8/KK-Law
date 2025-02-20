import { Outlet, useParams } from "react-router-dom";
import Header from "../../components/sharedComponents/Header";
import Banner from "./Banner";
import BreadCrump from "./BreadCrump";

const TeamLayout = () => {
  const { name } = useParams<{ name: string }>();
  return (
    <section>
      <div className="w-full">
        {name ? <Banner name={name} /> : <Header title="Our Legal Team" />}
      </div>
      <div className="w-full  shadow">
        <div className="px-4 py-3 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <BreadCrump />
        </div>
      </div>
      <div className="px-4 py-3 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <Outlet />
      </div>
    </section>
  );
};

export default TeamLayout;
