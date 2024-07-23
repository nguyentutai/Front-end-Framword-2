import { FileInput, Label, ToggleSwitch, Select } from "flowbite-react";
import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IProduct } from "../../interfaces/IProduct";
import { zodResolver } from "@hookform/resolvers/zod";
import ProductSchemaValid from "../../schemaValid/ProductSchemaValid";
import slugify from "react-slugify";
import instance from "../../instance/instance";
import { toast } from "react-toastify";
import { ICategory } from "../../interfaces/ICategory";
import _ from "lodash";
import axios from "axios";
import LoadingOverlay from "react-loading-overlay-ts";
import HashLoader from "react-spinners/HashLoader";
const ProductsAdmin = () => {
  const [openModal, setOpenModal] = useState(false);
  const [statusProduct, setStatus] = useState(true);
  const [categorys, setCategorys] = useState<ICategory[]>([]);
  const [files, setFiles] = useState<string[]>([]);
  const [isActive, setActive] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IProduct>({
    resolver: zodResolver(ProductSchemaValid),
  });

  const handleUploadImageProduct = async (e: any) => {
    try {
      const fileForms = e.target.files;
      setFiles(fileForms);
      if ([...files].length > 0) {
        setFiles(_.uniqBy([...files, ...fileForms], "name"));
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const onSubmit = async (dataForm: IProduct) => {
    try {
      const uploadCloud = [...files].map(async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append(
          "upload_preset",
          import.meta.env.VITE_PRESET_KEY_CLOADINARY
        );
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${
            import.meta.env.VITE_CLOUD_NAME_CLOADINARY
          }/image/upload`,
          formData
        );
        return response.data.secure_url;
      });
      const { name, price, price_discount, categoryId } = dataForm;
      const urls = await Promise.all(uploadCloud);
      const { data } = await instance.post("products", {
        name,
        price,
        price_discount,
        slug: slugify(name),
        images: urls,
        status: statusProduct,
        categoryId,
      });
      data &&
      setActive(false);
      reset();
      setStatus(true);
      setOpenModal(false);
      toast.success("Thêm sản phẩm thành công!")
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  
  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get("categorys");
        setCategorys(data.data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    })();
  },[]);


  const handleRemoveImage = (image_name: string) => {
    setFiles([...files].filter((file) => file.name !== image_name));
  };
  return (
    <div className="products-admin">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center py-2 px-4 bg-primary text-util rounded-md hover:bg-util hover:text-primary hover:outline hover:outline-primary transition-all"
        >
          Thêm sản phẩm{" "}
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
        <div className="border flex max-w-[200px] md:max-w-xs w-full items-center outline-none px-2 rounded-md">
          <input
            placeholder="Tìm theo tên: "
            className="border-0 outline-none py-2 w-full text-sm"
            // onChange={(e) => {
            //   setvalueSearch(e.target.value);
            // }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>
      <Modal
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
        size={"lg"}
      >
        <Modal.Header>
          {/* {AddOrUpdate === "ADD" ? "Thêm" : "Sửa"} danh mục */}
        </Modal.Header>
        <Modal.Body>
          <LoadingOverlay
            active={isActive}
            spinner={<HashLoader color="#1B95F2" size={50} />}
            classNamePrefix="_loading_overlay_content"
          >
            <div className="px-3 pb-2 ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4 w-full">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name-category"
                      className="font-medium text-sm"
                    >
                      Tên danh mục
                    </label>
                    <input
                      type="text"
                      className="block border border-[#d9d9d9] rounded-md w-full h-10 text-sm"
                      placeholder="Tên danh mục: "
                      {...register("name")}
                    />
                    <span className="text-sm text-red-400">
                      {errors.name?.message}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="price-product"
                        className="font-medium text-sm"
                      >
                        Giá
                      </label>
                      <input
                        type="number"
                        className="block border border-[#d9d9d9] rounded-md w-full h-10 text-sm"
                        placeholder="Giá: "
                        min={1}
                        {...register("price", {
                          valueAsNumber: true,
                        })}
                      />
                      <span className="text-sm text-red-400">
                        {errors.price?.message}
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="price_discount-product"
                        className="font-medium text-sm"
                      >
                        Giá Discount
                      </label>
                      <input
                        type="number"
                        className="block border border-[#d9d9d9] rounded-md w-full h-10 text-sm"
                        placeholder="Giá giảm giá: "
                        min={0}
                        {...register("price_discount", {
                          valueAsNumber: true,
                        })}
                        defaultValue={0}
                      />
                      <span className="text-sm text-red-400">
                        {errors.price_discount?.message}
                      </span>
                    </div>
                  </div>
                  {/* <div className="space-y-1.5">
                  <label
                    htmlFor="slug-category"
                    className="font-medium text-sm"
                  >
                    Slug
                  </label>
                  <input
                    type="text"
                    placeholder="Slug:"
                    className="block border border-[#d9d9d9] text-sm rounded-md bg-gray-200 h-10 hover:cursor-not-allowed w-full"
                    disabled
                    {...register("slug")}
                    defaultValue={slugify(slugProduct)}
                  />
                </div> */}
                  <div className="space-y-1.5">
                    <div className="mb-2 block">
                      <Label htmlFor="categorys" value="Chọn danh mục" />
                    </div>
                    <Select {...register("categoryId")} id="id-categorys">
                      {categorys &&
                        categorys.map((category) => {
                          return (
                            <option key={category._id} value={category._id}>
                              {category.name}
                            </option>
                          );
                        })}
                    </Select>
                    <span className="text-sm text-red-400">
                      {errors.categoryId?.message}
                    </span>
                  </div>
                  <div className="flex w-full flex-col space-y-2">
                    <label className="font-medium text-sm">
                      Upload{" "}
                      <span className="text-primary">
                        ( {[...files] && files.length} ảnh)
                      </span>
                    </label>
                    <Label
                      htmlFor="dropzone-file"
                      className="flex h-20 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <svg
                          className="h-8 w-8 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className=" text-xs text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                        </p>
                      </div>
                      <FileInput
                        id="dropzone-file"
                        className="hidden"
                        multiple
                        {...register("images", {
                          onChange(event) {
                            handleUploadImageProduct(event);
                          },
                        })}
                        accept="image/*"
                      />
                    </Label>
                    <div
                      className={
                        files.length > 0
                          ? "p-2 rounded-lg flex flex-col gap-2 w-full border"
                          : "flex flex-col gap-2 w-full"
                      }
                    >
                      {[...files].map((file, index) => {
                        return (
                          <div
                            key={index}
                            className="flex flex-col gap-2 border rounded-md"
                          >
                            <div className="flex items-center justify-betweenv w-full gap-2">
                              <div className="max-w-[100px] w-full h-full">
                                <img
                                  src={URL.createObjectURL(file)}
                                  className="rounded-md inline-block object-cover"
                                />
                              </div>
                              <div className="max-w-[150px] w-full">
                                <p className="text-sm overflow-ellipsis whitespace-nowrap overflow-hidden w-full">
                                  {file.name}
                                </p>
                                <div className="hover:bg-util w-fit text-primary px-2 mt-1 rounded-sm shadow-sm">
                                  <span className="text-xs">
                                    {file.size} KB
                                  </span>
                                </div>
                              </div>
                              <button
                                onClick={() => {
                                  handleRemoveImage(file.name);
                                }}
                                className="w-fit mx-auto block h-fit rounded-full hover:bg-red-100 hover:shadow"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1}
                                  stroke="#FF6C37"
                                  className="size-7"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <span className="text-sm text-red-400">
                      {errors.images?.message}
                    </span>
                  </div>
                  <div>
                    <ToggleSwitch
                      label="Trạng thái"
                      checked={statusProduct}
                      {...register("status")}
                      className="my-7"
                      onChange={setStatus}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="flex items-center py-2 px-4 bg-primary text-util rounded-md hover:bg-util hover:text-primary hover:outline hover:outline-primary transition-all "
                >
                  {/* {AddOrUpdate === "ADD" ? "Thêm" : "Sửa"} danh mục */}
                  Thêm sản phẩm
                </button>
              </form>
            </div>
          </LoadingOverlay>
        </Modal.Body>
      </Modal>

    </div>
  );
};

export default ProductsAdmin;
