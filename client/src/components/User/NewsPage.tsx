import React from "react";

export default function NewsPage() {
  return (
    <>
      <main className="flex mt-5 w-full">
        <div className="w-[62.5%] p-5 mr-5 rounded-lg border border-gray-300">
          <article>
            <h2 className="text-[#333] text-xl font-bold">
              Great White Shark Nursery Found in Waters Off Montauk
            </h2>
            <div className="post-meta mb-3.5 text-[0.9em] leading-5 text-[#888]">
              By Admin / February 15, 2024 / 35 Views / No Comments Yet
            </div>
            <img
              src="images/shark.jpg"
              alt="Article Image"
              className="w-full h-auto rounded-lg mb-3.5"
            />
            <p>
              Lacus luctus magna. Quisque cursus, metus vitae pharetra auctor,
              sem massa mattis sem, at interdum magna augue eget diam.
              Vestibulum.
            </p>
            <p>
              The purpose of this HTML is to help determine what default
              settings are with CSS and to make sure that all possible HTML
              Elements are included in this HTML so as to not miss any possible
              Elements when designing a site.
            </p>
            <h3 className="text-[#333] text-lg font-semibold">Paragraph</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              odio sapien, sollicitudin vel volutpat eget, faucibus at neque.
              Vestibulum enim ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Morbi vel eros odio. Phasellus risus
              ligula.
            </p>
            <div className="highlight py-2 px-5 my-5 mx-0 italic border border-gray-300 rounded-lg">
              Vitae aliquam lacus pellentesque nec. Fusce mattis orci sed lacus
              condimentum malesuada. In hac habitasse platea dictumst. Integer
              felis ipsum, laoreet in gravida in, vehicula vitae tortor.
              Curabitur vestibulum nisl metus, ac auctor ligula. Morbi egestas
              odio tincidunt mauris dictum non faucibus ipsum ornare.
            </div>
            <div className="post-image flex my-5 mx-0 border border-gray-300 rounded-lg p-2">
              <img
                src="images/game1.jpg"
                alt="Post Image"
                className="w-2/4 h-auto mr-3.5 rounded-lg"
              />
              <p>
                Magna odio elementum eros, vel volutpat nisi libero sed erat.
                Donec lobortis consequat orci, in malesuada ante aliquam nec.
                Nullam sed.
              </p>
            </div>
            <p>
              Mauris eu magna et nunc commodo congue. Morbi tincidunt commodo
              diam, vitae aliquam lacus pellentesque nec. Fusce mattis orci sed
              lacus condimentum malesuada. In hac habitasse platea dictumst.
              Integer felis ipsum, laoreet in gravida in, vehicula vitae tortor.
              Curabitur vestibulum nisl metus, ac auctor ligula. Morbi egestas
              odio tincidunt mauris dictum non faucibus ipsum ornare. Mauris ac
              justo sit amet malesuada ornare. Etiam enim lorem, suscipit sed
              tincidunt nec, consectetur eget dui. Etiam in erat leo, non
              iaculis sem. Aliquam sod nulla metus.
            </p>
            <div className="social-share flex justify-center my-5 mx-0">
              <a
                href="#"
                className="text-[#007bff] my-0 mx-2 text-[1.2em] leading-7 hover:text-[#0056b3]"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-[#007bff] my-0 mx-2 text-[1.2em] leading-7 hover:text-[#0056b3]"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-[#007bff] my-0 mx-2 text-[1.2em] leading-7 hover:text-[#0056b3]"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="text-[#007bff] my-0 mx-2 text-[1.2em] leading-7 hover:text-[#0056b3]"
              >
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a
                href="#"
                className="text-[#007bff] my-0 mx-2 text-[1.2em] leading-7 hover:text-[#0056b3]"
              >
                <i className="fab fa-reddit-alien"></i>
              </a>
              <a
                href="#"
                className="text-[#007bff] my-0 mx-2 text-[1.2em] leading-7 hover:text-[#0056b3]"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="#"
                className="text-[#007bff] my-0 mx-2 text-[1.2em] leading-7 hover:text-[#0056b3]"
              >
                <i className="fab fa-telegram-plane"></i>
              </a>
            </div>
          </article>
          <div className="related-blog p-5 mt-5 rounded-lg border border-gray-300">
            <h3 className="mb-5 text-lg font-semibold">Related Blog</h3>
            <div className="related-blog-container flex justify-between">
              <div className="related-blog-item rounded-lg overflow-hidden flex flex-col mr-5 border border-gray-300">
                <div className="relative">
                  <img
                    src="images/game1.jpg"
                    alt="Blog 1"
                    className="w-full h-auto rounded-tl-lg rounded-tr-lg"
                  />
                  <span className="blog-label absolute top-[0.63rem] left-[0.63rem] text-[#fff] py-1 px-2 rounded-2xl text-[0.8em] border border-[#007bff] bg-[#007bff]">
                    News
                  </span>
                </div>
                <div className="related-blog-content p-3.5">
                  <a
                    href="#"
                    className="text-[#333] block font-bold hover:text-[#007bff]"
                  >
                    Integer Video Praesent libero Sed Cursus ante Daribus siam
                  </a>
                </div>
              </div>
              <div className="related-blog-item rounded-lg overflow-hidden flex flex-col mr-5 border border-gray-300">
                <div className="relative">
                  <img
                    src="images/game2.jpg"
                    alt="Blog 2"
                    className="w-full h-auto rounded-tl-lg rounded-tr-lg"
                  />
                  <span className="blog-label absolute top-[0.63rem] left-[0.63rem] text-[#fff] py-1 px-2 rounded-2xl text-[0.8em] border border-[#007bff] bg-[#007bff]">
                    News
                  </span>
                </div>
                <div className="related-blog-content p-3.5">
                  <a
                    href="#"
                    className="text-[#333] block font-bold hover:text-[#007bff]"
                  >
                    Werking on Official Profpects Sush as Soweman Autemetad
                  </a>
                </div>
              </div>
              <div className="related-blog-item rounded-lg overflow-hidden flex flex-col mr-0 border border-gray-300">
                <div className="relative">
                  <img
                    src="images/game3.jpg"
                    alt="Blog 3"
                    className="w-full h-auto rounded-tl-lg rounded-tr-lg"
                  />
                  <span className="blog-label absolute top-[0.63rem] left-[0.63rem] text-[#fff] py-1 px-2 rounded-2xl text-[0.8em] border border-[#007bff] bg-[#007bff]">
                    News
                  </span>
                </div>
                <div className="related-blog-content p-3.5">
                  <a
                    href="#"
                    className="text-[#333] block font-bold hover:text-[#007bff]"
                  >
                    This is Where you teka out all your hostilities and
                    Firstrations
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside className="w-[37.5%] p-5 mb-5 rounded-lg border border-gray-300">
          <div className="recent-posts">
            <h3 className="mb-3 text-lg font-semibold">Recent Posts</h3>
            <ul className="p-0">
              <li className="flex items-center mb-3.5 pb-3 border-b border-gray-300 hover:bg-gray-100">
                <a
                  href="https://hex-wp.com/gamemart/blog_1/"
                  className="flex items-center text-[#333] w-full py-2 px-3"
                >
                  <img
                    src="images/shark.jpg"
                    alt="Great White Shark"
                    className="max-w-[7.50rem] h-auto mr-3.5 rounded"
                  />
                  <span className="text-[0.9em] leading-5 hover:text-[#007bff]">
                    Great White Shark Nursery Found in Waters Off Montauk
                  </span>
                </a>
              </li>
              <li className="flex items-center mb-3.5 pb-3 border-b border-gray-300 hover:bg-gray-100">
                <a
                  href="#"
                  className="flex items-center text-[#333] w-full py-2 px-3"
                >
                  <img
                    src="images/game1.jpg"
                    alt="Game Image"
                    className="max-w-[7.50rem] h-auto mr-3.5 rounded"
                  />
                  <span className="text-[0.9em] leading-5 hover:text-[#007bff]">
                    At Solmen va Essern Necesari the Angleso Grammatica
                  </span>
                </a>
              </li>
              <li className="flex items-center mb-3.5 pb-3 border-b border-gray-300 hover:bg-gray-100">
                <a
                  href="#"
                  className="flex items-center text-[#333] w-full py-2 px-3"
                >
                  <img
                    src="images/game2.jpg"
                    alt="Game Image"
                    className="max-w-[7.50rem] h-auto mr-3.5 rounded"
                  />
                  <span className="text-[0.9em] leading-5 hover:text-[#007bff]">
                    I Really Believe that If You Practice Enough You Could
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="tags p-5 mb-5 rounded-lg border border-gray-300">
            <h3 className="mb-3 text-lg font-semibold">Tags</h3>
            <ul className="flex flex-col p-0">
              <li className="mb-3.5 border-b border-gray-300">
                <a
                  href="#"
                  className="text-[#333] block py-2 px-3 hover:bg-[#007bff] hover:text-[#fff]"
                >
                  Accessories
                </a>
              </li>
              <li className="mb-3.5 border-b border-gray-300">
                <a
                  href="#"
                  className="text-[#333] block py-2 px-3 hover:bg-[#007bff] hover:text-[#fff]"
                >
                  Action
                </a>
              </li>
              <li className="mb-3.5 border-b border-gray-300">
                <a
                  href="#"
                  className="text-[#333] block py-2 px-3 hover:bg-[#007bff] hover:text-[#fff]"
                >
                  Adventure
                </a>
              </li>
              <li className="mb-3.5 border-b border-gray-300">
                <a
                  href="#"
                  className="text-[#333] block py-2 px-3 hover:bg-[#007bff] hover:text-[#fff]"
                >
                  RPG
                </a>
              </li>
            </ul>
          </div>
          <div className="categories p-5 mb-5 rounded-lg border border-gray-300">
            <h3 className="mb-3 text-lg font-semibold">Product Categories</h3>
            <ul className="p-0">
              <li className="mb-3.5 border-b border-gray-300">
                <a
                  href="#"
                  className="text-[#333] block py-2 px-3 hover:bg-[#007bff] hover:text-[#fff]"
                >
                  Accessories
                </a>
              </li>
              <li className="mb-3.5 border-b border-gray-300">
                <a
                  href="#"
                  className="text-[#333] block py-2 px-3 hover:bg-[#007bff] hover:text-[#fff]"
                >
                  Action
                </a>
              </li>
              <li className="mb-3.5 border-b border-gray-300">
                <a
                  href="#"
                  className="text-[#333] block py-2 px-3 hover:bg-[#007bff] hover:text-[#fff]"
                >
                  Adventures
                </a>
              </li>
              <li className="mb-3.5 border-b border-gray-300">
                <a
                  href="#"
                  className="text-[#333] block py-2 px-3 hover:bg-[#007bff] hover:text-[#fff]"
                >
                  Console
                </a>
              </li>
              <li className="mb-3.5 border-b border-gray-300">
                <a
                  href="#"
                  className="text-[#333] block py-2 px-3 hover:bg-[#007bff] hover:text-[#fff]"
                >
                  Gamepad
                </a>
              </li>
              <li className="mb-3.5 border-b border-gray-300">
                <a
                  href="#"
                  className="text-[#333] block py-2 px-3 hover:bg-[#007bff] hover:text-[#fff]"
                >
                  Games
                </a>
              </li>
              <li className="mb-3.5 border-b border-gray-300">
                <a
                  href="#"
                  className="text-[#333] block py-2 px-3 hover:bg-[#007bff] hover:text-[#fff]"
                >
                  HeadPhone
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </main>
    </>
  );
}
