import { Modal } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { ToggleSwitch } from "flowbite-react";
import { toast } from "react-toastify";
import instance from "../../instance/instance";
import { CategorysContext } from "../../context/CategoryContext";
import slugify from "react-slugify";
const CategorysAdmin = () => {
  const [openModal, setOpenModal] = useState(false);
  const [status, setStatus] = useState(true);
  const { categorys, dispatch } = useContext(CategorysContext);
  const [slugCategory,setSlugCategory]=useState<string>("")
  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get("categorys");
        dispatch({
          type: "LIST",
          payload: data.data,
        });
      } catch (error) {
        toast.error(`Lỗi ${error.response.data.message}`);
      }
    })();
  }, []);
  // update status category
  const handleUpdateStatus= async(id:string,statusCategory:boolean)=>{
    try {
      const { data } = await instance.patch(`categorys/${id}`,{status:statusCategory});
      dispatch({
        type:"UPDATE",
        payload:data.data
      })
      if (data.data.status) {
        toast.success("Public");
      } else {
        toast.warning("Private");
      }
    } catch (error) {
      toast.error(`Lỗi ${error.response.data.message}`);
    }
  }
  // add category
  // const handleAddCategory=async ()=>{
  //   try {
  //     const { data } = await instance.patch(`categorys`,{

  //     });
      
  //   } catch (error) {
  //     toast.error(`Lỗi ${error.response.data.message}`);
  //   }
  // }
  return (
    <div className="categorys-admin">
      <button
        onClick={() => setOpenModal(true)}
        className="flex items-center py-2 px-4 bg-primary text-util rounded-md hover:bg-util hover:text-primary hover:outline hover:outline-primary transition-all"
      >
        Thêm danh mục{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Thêm danh mục</Modal.Header>
        <Modal.Body>
          <div className="px-5 pb-2">
            <form>
              <div className="space-y-3 max-w-[50%]">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name-category"
                    className="font-medium text-sm"
                  >
                    Tên danh mục
                  </label>
                  <input
                    type="text"
                    className="block border border-[#d9d9d9] rounded-md w-full h-10"
                    onChange={(e)=>{setSlugCategory(e.target.value)}}
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="slug-category"
                    className="font-medium text-sm"
                  >
                    Slug
                  </label>
                  <input
                    type="text"
                    className="block border border-[#d9d9d9] rounded-md bg-gray-100 h-10 hover:cursor-not-allowed w-full"
                    disabled
                    value={slugify(slugCategory)}
                  />
                </div>
                <div>
                  <ToggleSwitch
                    label="Trạng thái"
                    checked={status}
                    onChange={setStatus}
                    className="my-8"
                  />
                </div>
              </div>
              <button className="flex items-center py-2 px-4 bg-primary text-util rounded-md hover:bg-util hover:text-primary hover:outline hover:outline-primary transition-all">
                Thêm danh mục
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      <table className="table w-full mt-10 *:border">
        <thead className="h-14 bg-primary text-white">
          <tr className="*:border">
            <th>STT</th>
            <th>Tên danh mục</th>
            <th>Slug</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {categorys &&
            categorys.map((category,index) => {
              return (
                <tr className="*:border text-center h-12" key={category._id}>
                  <td>{index+1}</td>
                  <td>{category.name}</td>
                  <td>{category.slug}</td>
                  <td>
                    <ToggleSwitch
                      checked={category.status}
                      onChange={()=>{
                        setStatus(!category.status)
                        handleUpdateStatus(category._id!,!category.status)
                      }}
                      className="mx-auto"
                    />
                  </td>
                  <td>1</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default CategorysAdmin;
