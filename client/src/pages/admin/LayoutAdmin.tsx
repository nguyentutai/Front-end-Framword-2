import HeaderAdmin from "../../components/Admin/HeaderAdmin";
import MainContentAdmin from "../../components/Admin/MainContentAdmin";
import SideBarAdmin from "../../components/Admin/SideBarAdmin";
import UserProvider from "../../context/UserContext";

const LayoutAdmin = () => {
  return (
    <>
      <div className="ms-0 lg:ms-[230px]">
        <HeaderAdmin />
        <UserProvider>
          <MainContentAdmin />
        </UserProvider>
      </div>
      <SideBarAdmin />
    </>
  );
};

export default LayoutAdmin;
