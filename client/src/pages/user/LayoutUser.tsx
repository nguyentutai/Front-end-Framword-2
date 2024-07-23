import Header from "../../components/User/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/User/Footer";

const LayoutUser = () => {
  return (
    <>
      <Header />
      <main className="w-full dark:bg-[#1C2329]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LayoutUser;
