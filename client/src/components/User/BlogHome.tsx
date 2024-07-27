import { Image } from "antd";
import { Link } from "react-router-dom";
export default function BlogHome() {
  return (
    <>
      <div className=" overflow-hidden">
        <div>
          <Image.PreviewGroup
            items={[
              "https://hex-wp.com/gamemart/wp-content/uploads/2024/03/blog_image_1.jpg",
              "https://hex-wp.com/gamemart/wp-content/uploads/2024/03/blog_image_4-300x169.jpg",
              "https://hex-wp.com/gamemart/wp-content/uploads/2024/03/blog_image_5.jpg",
            ]}
          >
            <Image
              className="w-full rounded-2xl"
              src="https://hex-wp.com/gamemart/wp-content/uploads/2024/03/blog_image_1.jpg"
            />
          </Image.PreviewGroup>
        </div>
        <div>
          <Link
            to={""}
            className="font-bold text-base hover:text-primary dark:text-util duration-500 cursor-pointer"
          >
            Great White Shark Nursery Found in Waters Off Montauk
          </Link>
        </div>
        <div className="flex gap-3 items-center py-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 dark:text-util"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <span className="text-primary/70 font-bold text-xs">
            By Admin / February 15, 2024
          </span>
        </div>
        <span className="text-xs text-black/80 dark:text-util">
          Lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem
          massa mattis sem, at interdum magna augue eget diam. Vestibulum
        </span>
      </div>
    </>
  );
}
