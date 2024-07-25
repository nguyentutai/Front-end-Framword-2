import { Rating } from "@mui/material";
import Links from "@mui/material/Link";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProductList1 from "../Utils/ProductList1";
import ProductList2 from "../Utils/ProductList2";
function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
export default function ProductListPage() {
  const [age, setAge] = useState("");
  const [listPro, setListPro] = useState(true);
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div className="bg-[#E7EBEF] py-2 dark:bg-[#1E2832]">
        <div className="container-main text-md text-secondary font-mono">
          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs
              aria-label="breadcrumb"
              className="dark:text-util/70 *:!text-sm"
            >
              <Links underline="hover" color="inherit" href="/">
                Home
              </Links>
              <Links
                underline="hover"
                color="text.primary"
                href="/material-ui/react-breadcrumbs/"
                aria-current="page"
                className="dark:text-util/90 !text-sm"
              >
                Products
              </Links>
            </Breadcrumbs>
          </div>
        </div>
      </div>
      <div className="container-main grid grid-cols-12 gap-10 pt-2 pb-8">
        <div className="col-span-3 sticky top-0 z-10">
          <div className="w-full border-b-[3px] py-3">
            <h3 className="text-lg font-bold w-fit tab-border-bottom  relative text-black">
              Product Categories
            </h3>
          </div>
          <div>
            <div className="pt-5">
              <div className="flex flex-wrap gap-2 shadow-catelist rounded-xl">
                <ul className="*:flex *:gap-3 *:space-y-3 *:items-center w-full p-4 *:my-2">
                  <li className="hover:bg-slate-400/50 w-full p-1 cursor-pointer duration-300 hover:rounded-lg hover:font-bold">
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
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>

                    <Link to={""} className="pb-2 text-sm">
                      Danh mục 1
                    </Link>
                  </li>
                  <li className="hover:bg-slate-400/50 w-full p-1 cursor-pointer duration-300 hover:rounded-lg hover:font-bold">
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
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>

                    <Link to={""} className="pb-2  text-sm">
                      Danh mục 2
                    </Link>
                  </li>
                  <li className="hover:bg-slate-400/50 w-full p-1 cursor-pointer duration-300 hover:rounded-lg hover:font-bold">
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
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>

                    <Link to={""} className="pb-2  text-sm">
                      Danh mục 3
                    </Link>
                  </li>
                  <li className="hover:bg-slate-400/50 w-full p-1 cursor-pointer duration-300 hover:rounded-lg hover:font-bold">
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
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>

                    <Link to={""} className="pb-2  text-sm">
                      Danh mục 4
                    </Link>
                  </li>
                  <li className="hover:bg-slate-400/50 w-full p-1 cursor-pointer duration-300 hover:rounded-lg hover:font-bold">
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
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>

                    <Link to={""} className="pb-2  text-sm">
                      Danh mục 5
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-9">
          <div className="w-full border-b-[3px] py-3">
            <h3 className="text-lg font-bold w-fit after:!bg-red-600 tab-border-bottom relative text-black">
              Shop
            </h3>
          </div>
          <div className="py-5">
            <div className="flex justify-between items-center shadow-catelist rounded-lg px-3">
              <div className="flex gap-2 items-center">
                <svg
                  onClick={() => setListPro(true)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`size-6 cursor-pointer ${
                    !listPro && "text-black/30"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                  />
                </svg>
                <svg
                  onClick={() => setListPro(false)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`size-6 cursor-pointer ${
                    listPro && "text-black/30"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
                  />
                </svg>
              </div>
              <div>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel
                    className="!bg-white !text-base"
                    id="demo-select-small-label"
                  >
                    Sort By Price
                  </InputLabel>
                  <Select
                    className="!w-[150px] !rounded-xl !text-base"
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Sort By Price"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>1</em>
                    </MenuItem>
                    <MenuItem className="!text-base" value={10}>
                      Ten
                    </MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div>
            {listPro ? (
              <div className="grid grid-cols-4 gap-3">
                <ProductList1 />
                <ProductList1 />
                <ProductList1 />
                <ProductList1 />
                <ProductList1 />
                <ProductList1 />
                <ProductList1 />
                <ProductList1 />
                <ProductList1 />
                <ProductList1 />
                <ProductList1 />
                <ProductList1 />
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <ProductList2 />
                <ProductList2 />
                <ProductList2 />
                <ProductList2 />
                <ProductList2 />
                <ProductList2 />
                <ProductList2 />
              </div>
            )}
          </div>
          <div className="flex justify-center items-center gap-2 *:border *:rounded-full pt-4 *:w-[26px] *:h-[26px] hover:*:bg-red-600 *:duration-300 hover:*:text-white">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 px-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button className="w-[26px]">1</button>
            <button>2</button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 ps-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
