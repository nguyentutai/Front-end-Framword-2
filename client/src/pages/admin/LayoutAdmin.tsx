import HeaderAdmin from "../../components/Admin/HeaderAdmin";
import MainContentAdmin from "../../components/Admin/MainContentAdmin";
import SideBarAdmin from "../../components/Admin/SideBarAdmin";
import UserProvider from "../../context/UserContext";
import VoucherProvider from "../../context/VoucherContext";

const LayoutAdmin = () => {
  return (
    <>
      <div className="ms-0 lg:ms-[230px]">
        <HeaderAdmin />
        <UserProvider>
          <VoucherProvider>
            <MainContentAdmin />
          </VoucherProvider>
        </UserProvider>
      </div>
      <SideBarAdmin />
    </>
  );
};

export default LayoutAdmin;
