import React from "react";

export default function BlogPage() {
  return (
    <>
      <main className="flex mt-5">
        <div className="container w-4/5 m-auto flex">
          {/* Phần nội dung chính */}
          <div className="main-content flex-[2.5] mr-5">
            <h3 className="text-lg font-semibold">News</h3>
            <div className="news space-y-5">
              {/* Bài viết 1 */}
              <article className="flex mb-5 bg-[#fff] p-5 rounded-lg shadow-lg">
                <img
                  src="images/shark.jpg"
                  alt="Great White Shark"
                  className="max-w-[18.75rem] h-auto mr-5 object-cover rounded"
                />
                <div className="text-content flex-1">
                  <h2 className="text-[1.56rem] leading-8 font-bold m-0">
                    Great White Shark Nursery Found in Waters Off Montauk
                  </h2>
                  <div className="text-body mt-3">
                    <p className="text-[1em] leading-5 text-[#555] mb-3">
                      Mihi crede, si te ipse et tuas cogitationes et studia
                      perspexeris; Teneamus enim illud necesse est, cum
                      consequens omnis iste natus error sit voluptatem
                    </p>
                    <a
                      href="#"
                      className="inline-block bg-[#007bff] text-[#fff] py-2 px-4 rounded hover:bg-[#0056b3]"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </article>
              {/* Bài viết 2 */}
              <article className="flex mb-5 bg-[#fff] p-5 rounded-lg shadow-lg">
                <img
                  src="images/game1.jpg"
                  alt="Game Image"
                  className="max-w-[18.75rem] h-auto mr-5 object-cover rounded"
                />
                <div className="text-content flex-1">
                  <h2 className="text-[1.56rem] leading-8 font-bold m-0">
                    At Solmen va Essern Necesari the Angleso Grammatica
                  </h2>
                  <div className="text-body mt-3">
                    <p className="text-[1em] leading-5 text-[#555] mb-3">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis
                    </p>
                    <a
                      href="#"
                      className="inline-block bg-[#007bff] text-[#fff] py-2 px-4 rounded hover:bg-[#0056b3]"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </article>
              {/* Bài viết 3 */}
              <article className="flex mb-5 bg-[#fff] p-5 rounded-lg shadow-lg">
                <img
                  src="images/game2.jpg"
                  alt="Game Image"
                  className="max-w-[18.75rem] h-auto mr-5 object-cover rounded"
                />
                <div className="text-content flex-1">
                  <h2 className="text-[1.56rem] leading-8 font-bold m-0">
                    I Really Believe that If You Practice Enough You Could
                  </h2>
                  <div className="text-body mt-3">
                    <p className="text-[1em] leading-5 text-[#555] mb-3">
                      Tempore recusandae. Rerum sed nulla eum vero expedita ex
                      delectus voluptates rem at neque quos facere sequi unde
                      optio aliquam!
                    </p>
                    <a
                      href="#"
                      className="inline-block bg-[#007bff] text-[#fff] py-2 px-4 rounded hover:bg-[#0056b3]"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </article>
              {/* Bài viết 4 */}
              <article className="flex mb-5 bg-[#fff] p-5 rounded-lg shadow-lg">
                <img
                  src="images/game3.jpg"
                  alt="Game Image"
                  className="max-w-[18.75rem] h-auto mr-5 object-cover rounded"
                />
                <div className="text-content flex-1">
                  <h2 className="text-[1.56rem] leading-8 font-bold m-0">
                    AdIus Suas Lorem Eos Alii Vivendum Adversarium Ex Eirmod
                  </h2>
                  <div className="text-body mt-3">
                    <p className="text-[1em] leading-5 text-[#555] mb-3">
                      Cheesy feet monterey jack cheese slices babybel edam
                      roquefort blue castello ricotta. Pecorino boursin cheddar
                      cheese and biscuits airedale red leicester goat cheese
                      slices
                    </p>
                    <a
                      href="#"
                      className="inline-block bg-[#007bff] text-[#fff] py-2 px-4 rounded hover:bg-[#0056b3]"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Các phần bên */}
          <aside className="flex-[1.5] space-y-5">
            <h3 className="text-lg font-semibold">Recent Posts</h3>
            <div className="recent-posts p-5 mb-5 rounded-lg bg-white shadow-lg">
              <ul className="p-0 list-none">
                <li className="flex items-center mb-3.5 pb-3 border-b border-gray-300">
                  <a
                    href="https://hex-wp.com/gamemart/blog_1/"
                    className="flex items-center text-[#333] hover:text-[#007bff]"
                  >
                    <img
                      src="images/shark.jpg"
                      alt="Great White Shark"
                      className="max-w-[7.50rem] h-auto mr-3.5 rounded"
                    />
                    <span className="text-[0.9em] leading-5">
                      Great White Shark Nursery Found in Waters Off Montauk
                    </span>
                  </a>
                </li>
                <li className="flex items-center mb-3.5 pb-3 border-b border-gray-300">
                  <a
                    href="#"
                    className="flex items-center text-[#333] hover:text-[#007bff]"
                  >
                    <img
                      src="images/game1.jpg"
                      alt="Game Image"
                      className="max-w-[7.50rem] h-auto mr-3.5 rounded"
                    />
                    <span className="text-[0.9em] leading-5">
                      At Solmen va Essern Necesari the Angleso Grammatica
                    </span>
                  </a>
                </li>
                <li className="flex items-center mb-3.5 pb-3 border-b border-gray-300">
                  <a
                    href="#"
                    className="flex items-center text-[#333] hover:text-[#007bff]"
                  >
                    <img
                      src="images/game2.jpg"
                      alt="Game Image"
                      className="max-w-[7.50rem] h-auto mr-3.5 rounded"
                    />
                    <span className="text-[0.9em] leading-5">
                      I Really Believe that If You Practice Enough You Could
                    </span>
                  </a>
                </li>
                <li className="flex items-center mb-3.5 pb-3 border-b border-gray-300">
                  <a
                    href="#"
                    className="flex items-center text-[#333] hover:text-[#007bff]"
                  >
                    <img
                      src="images/game3.jpg"
                      alt="Game Image"
                      className="max-w-[7.50rem] h-auto mr-3.5 rounded"
                    />
                    <span className="text-[0.9em] leading-5">
                      AdIus Suas Lorem Eos Alii Vivendum Adversarium Ex Eirmod
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold">Tags</h3>
            <div className="tags p-5 mb-5 rounded-lg bg-white shadow-lg">
              <ul className="p-0 list-none">
                <li className="mb-3">
                  <a
                    href="#"
                    className="text-[#333] block py-2 px-3 rounded hover:bg-[#007bff] hover:text-[#fff]"
                  >
                    Action
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#"
                    className="text-[#333] block py-2 px-3 rounded hover:bg-[#007bff] hover:text-[#fff]"
                  >
                    Adventure
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#"
                    className="text-[#333] block py-2 px-3 rounded hover:bg-[#007bff] hover:text-[#fff]"
                  >
                    Strategy
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#"
                    className="text-[#333] block py-2 px-3 rounded hover:bg-[#007bff] hover:text-[#fff]"
                  >
                    RPG
                  </a>
                </li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold">Product Categories</h3>
            <div className="categories p-5 mb-5 rounded-lg bg-white shadow-lg">
              <ul className="p-0 list-none">
                <li className="mb-3">
                  <a
                    href="#"
                    className="text-[#333] block py-2 px-3 rounded hover:bg-[#007bff] hover:text-[#fff]"
                  >
                    Accessories
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#"
                    className="text-[#333] block py-2 px-3 rounded hover:bg-[#007bff] hover:text-[#fff]"
                  >
                    Games
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#"
                    className="text-[#333] block py-2 px-3 rounded hover:bg-[#007bff] hover:text-[#fff]"
                  >
                    Consoles
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#"
                    className="text-[#333] block py-2 px-3 rounded hover:bg-[#007bff] hover:text-[#fff]"
                  >
                    Gaming PCs
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
