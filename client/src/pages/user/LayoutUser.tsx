
import Header from "../../components/User/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/User/Footer";

const LayoutUser = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LayoutUser;
