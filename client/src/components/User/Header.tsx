import { useContext, useEffect, useState } from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { CategorysContext } from "../../context/CategoryContext";
import { useAuth } from "../../context/AuthContext";
import { Button, Drawer } from "flowbite-react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { categorys } = useContext(CategorysContext);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [isOpens, setIsOpens] = useState(true);
  const handleCloses = () => setIsOpens(false);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <div className="bg-[#1C2329] py-1.5 lg:block hidden">
        <section className="container-main flex justify-between items-center">
          <div>
            <ul className="*:text-white *:text-[13px] flex gap-4 *:cursor-pointer">
              <li className="hover:text-red-600 duration-300">FAQs</li>
              <li className="hover:text-red-600 duration-300">About Us</li>
              <li className="hover:text-red-600 duration-300">Contact Us</li>
              <li className="hover:text-red-600 duration-300">
                Order Tracking
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex text-white gap-9 items-center">
              <li className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#ffff"
                  className="w-4"
                >
                  <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
                </svg>
                <div>
                  <p className="text-[13px]">0123 456 789</p>
                </div>
              </li>
              <li className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#ffff"
                  className="w-4"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
                <div>
                  <p className="text-[13px]">example.store@email.com</p>
                </div>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className={`w-4 cursor-pointer`}
                  fill={`${darkMode ? "#00000" : "#ffff"}`}
                  onClick={() => setDarkMode(!darkMode)}
                >
                  <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                </svg>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <header className="dark:bg-black bg-util sticky top-0 z-50">
        <Navbar className="!block container-main dark:bg-black !p-0">
          <div className="w-full dark:bg-black">
            <section className="dark:bg-black flex container-main justify-between gap-10 py-4">
              <Navbar.Toggle />
              <Link to={""}>
                <img
                  className="max-w-[240px] text-black dark:text-white hidden lg:block"
                  src="https://hex-wp.com/gamemart/wp-content/uploads/2024/03/logo_homepage_3.png"
                  alt=""
                />
                <img
                  className="block lg:hidden"
                  src="../../../public/images/favicon.ico"
                  alt=""
                />
              </Link>
              <div className="border hidden lg:flex max-w-[200px] md:max-w-sm w-full items-center outline-none px-2 rounded-3xl py-[10px] dark:bg-[#1C2329]">
                <input
                  placeholder="Search..."
                  className="border-0 outline-none w-full text-sm px-2 bg-util dark:bg-[#1C2329]"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-5 dark:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              <div className="flex gap-7">
                <Link
                  to={""}
                  className="lg:flex hidden items-center gap-2 relative"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="size-5"
                  >
                    <path
                      fill={`${darkMode ? "#ffff" : "#00000"}`}
                      d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                    />
                  </svg>
                  <p className="dark:text-white  text-sm">Wishlist</p>
                  <p className="absolute top-1 -left-2 bg-red-600 rounded-full w-4 h-4 text-center text-white text-xs leading-4">
                    0
                  </p>
                </Link>
                <button
                  id="fade-button"
                  onClick={() => setIsOpens(true)}
                  className="flex items-center gap-2 relative dark:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="size-5 dark:text-white"
                  >
                    <path
                      fill={`${darkMode ? "#ffff" : "#00000"}`}
                      d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                    />
                  </svg>
                  <p className="lg:block hidden text-sm">My Cart</p>
                  <p className="absolute top-1 -left-2 bg-red-600 rounded-full w-4 h-4 text-center text-white text-xs leading-4">
                    0
                  </p>
                </button>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <div className="pb-1 border-b">
                    <MenuItem>
                      <div className="flex items-center gap-5">
                        <div className="max-w-[60px]">
                          <img
                            className="w-full"
                            src="https://hex-wp.com/gamemart/wp-content/uploads/2024/03/hard_image_15-210x210.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h3 className="text-xs font-semibold">Sản phẩm 1</h3>
                          <span className="text-xs font-bold">1 x $199.0</span>
                        </div>
                        <div className="hover:text-red-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18 18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem>
                      <div className="flex items-center gap-5">
                        <div className="max-w-[60px]">
                          <img
                            className="w-full"
                            src="https://hex-wp.com/gamemart/wp-content/uploads/2024/03/hard_image_15-210x210.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h3 className="text-xs font-semibold">Sản phẩm 1</h3>
                          <span className="text-xs font-bold">1 x $199.0</span>
                        </div>
                        <div className="hover:text-red-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18 18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      </div>
                    </MenuItem>
                  </div>
                  <div className="flex justify-between px-4 py-2">
                    <div>
                      <span className="text-xs font-medium">Subtotal:</span>
                    </div>
                    <div>
                      <span className="text-xs font-bold">$199.0</span>
                    </div>
                  </div>
                  <div className="px-5 py-2">
                    <div className="w-full border rounded-xl text-center cursor-pointer hover:bg-primary duration-300 hover:text-white py-2">
                      <p className="text-xs font-bold">View Card</p>
                    </div>
                  </div>
                  <div className="px-5">
                    <div className="w-full border rounded-xl bg-primary text-center cursor-pointer text-white hover:text-black duration-300 hover:opacity-90 py-2">
                      <p className="text-xs font-bold">Checkout</p>
                    </div>
                  </div>
                </Menu>
                {user && user ? (
                  <div
                    className="flex items-center gap-2"
                    aria-controls={open ? "fade-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <div className="max-w-6 rounded-full border p-0.5 dark:bg-util">
                      <img
                        src={
                          user.avatar ||
                          "https://res.cloudinary.com/drz5kdrm5/image/upload/v1722003900/th-removebg-preview_qy0spz.png"
                        }
                        alt=""
                      />
                    </div>
                    <span className="text-sm font-semibold dark:text-util">
                      {user.username}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 dark:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="size-5"
                    >
                      <path
                        fill={`${darkMode ? "#ffff" : "#00000"}`}
                        d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
                      />
                    </svg>
                    <Link to={"/login"}>Login</Link> /
                    <Link to={"/register"}>Register</Link>
                  </div>
                )}
              </div>
            </section>
            <section className="container-main flex items-center pb-3 bg-white dark:bg-black">
              {/* Categorys list */}
              <div className="flex items-center">
                <nav className="hidden space-x-10 md:flex">
                  <div className="relative">
                    <button
                      onClick={toggleDropdown}
                      type="button"
                      className="group p-3 inline-flex items-center justify-between bg-gray-200 rounded-md text-base font-medium hover:text-util hover:bg-primary duration-300 w-[300px]"
                      aria-expanded={isOpen}
                    >
                      <div className="flex gap-3 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="currentColor"
                          className="size-5 hover:text-util"
                        >
                          <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                        </svg>
                        <span>All Categorys</span>
                      </div>
                      <svg
                        className={`ml-2 h-5 w-5 ${
                          isOpen ? "rotate-180" : ""
                        } transition duration-300`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {isOpen && (
                      <div
                        className="absolute z-full mt-3 min-w-[300px] transform sm:px-0 z-50 rounded-sm bg-white"
                        style={{
                          transition:
                            "opacity 0.2s ease-out, transform 0.2s ease-out",
                          opacity: isOpen ? 1 : 0,
                          transform: isOpen ? "scale(1)" : "scale(0.9)",
                        }}
                      >
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                          <div className="relative  *:px-4 *:py-3 *:m-3 *:rounded-md">
                            {categorys &&
                              categorys.length > 0 &&
                              categorys.map((cate) => {
                                if (cate.status == true) {
                                  return (
                                    <Link
                                      className="hover:bg-slate-200 block"
                                      to={"/category/" + cate.slug}
                                    >
                                      {cate.name}
                                    </Link>
                                  );
                                }
                              })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </nav>
              </div>
              <nav className="w-full lg:ms-10">
                <Navbar.Collapse className="*:text-2xl *:cursor-pointer ">
                  <Link
                    className="ms-3 hover:text-red-600 duration-300 text-base"
                    to={"/"}
                  >
                    HomePage
                  </Link>
                  <Link
                    className="ms-3 hover:text-red-600 duration-300 text-base"
                    to={"/products"}
                  >
                    Shop
                  </Link>
                  <Link
                    className="ms-3 hover:text-red-600 duration-300 text-base"
                    to={"/news"}
                  >
                    News
                  </Link>
                  <Link
                    className="ms-3 hover:text-red-600 duration-300 text-base"
                    to={"/blogs"}
                  >
                    Pages
                  </Link>
                  <Link
                    className="ms-3 hover:text-red-600 duration-300 text-base"
                    to={"/contact"}
                  >
                    Contact Us
                  </Link>
                </Navbar.Collapse>
              </nav>
            </section>
          </div>
        </Navbar>
        <Drawer open={isOpens} onClose={handleCloses} position="right">
          <div className="flex items-center gap-4 bg-slate-300 px-4 py-3 rounded-xl">
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
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span className="text-xl">Cart</span>
          </div>
          <Drawer.Items>
            <div className="flex-col gap-4">
              <div className="flex items-center shadow justify-around gap-6 rounded-lg ">
                <div className="max-w-[100px]">
                  <img
                    className="w-full"
                    src="https://hex-wp.com/gamemart/wp-content/uploads/2024/03/hard_image_15-210x210.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-xs font-semibold pb-3">Sản phẩm 1</h3>
                  <span className="text-xs font-bold">1 x $199.0</span>
                </div>
                <div className="hover:text-red-600 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full">
              <Link
                to={""}
                className="rounded-lg block border border-gray-200 bg-white px-4 py-2 text-center w-full text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                View Cart
              </Link>
              <Link
                to={""}
                className="inline-flex justify-center mt-3 w-full items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Checking&nbsp;
                <svg
                  className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </Drawer.Items>
        </Drawer>
      </header>
    </>
  );
};

export default Header;
