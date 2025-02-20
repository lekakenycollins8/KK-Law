import { Time } from "./Time";
import { Navbar } from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <section className="w-full">
      <div className=" lg:sticky lg:top-0 lg:z-30">
        <Time />
        <Navbar />
      </div>
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default Layout;
