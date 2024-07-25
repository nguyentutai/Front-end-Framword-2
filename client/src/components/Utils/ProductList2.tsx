import { Rating } from "@mui/material";

export default function ProductList2() {
  return (
    <div className="overflow-hidden flex gap-10 px-10 group shadow-catelist rounded-lg py-2">
      <div className="max-w-[200px] relative rounded-xl overflow-hidden">
        <img
          src="https://hex-wp.com/gamemart/wp-content/uploads/2024/03/hard_image_2-600x600.jpg"
          alt="First"
          className="w-full h-full object-cover  transition-opacity duration-300 hover:opacity-0"
        />
        <img
          src="https://hex-wp.com/gamemart/wp-content/uploads/2024/03/hard_image_14.jpg"
          alt="Second"
          className="w-full h-full object-cover transition-opacity duration-700 opacity-0 hover:opacity-100 absolute top-0 left-0"
        />
      </div>
      <div className="pt-2">
        <div>
          <span className="text-xs text-black/50">Games</span>
        </div>
        <div>
          <h3 className="py-2 text-base dark:text-util">
            Playstation 5 Drive Editoin
          </h3>
        </div>
        <div className="pb-2">
          <span className="text-base font-bold dark:text-util">$550.00</span>
        </div>
        <div>
          <Rating
            name="disabled"
            value={4}
            className="pointer-events-none !text-[16px]"
          />
        </div>
        <div className="pt-3 flex items-center gap-3">
          <button className="bg-red-500 rounded-2xl px-4 py-2 text-xs text-white font-semibold hover:bg-primary duration-500">
            Add to card
          </button>
          <div className="hover:bg-primary hover:text-white duration-500 cursor-pointer rounded-full p-1.5 border">
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
          <div className="hover:bg-primary hover:text-white duration-500 cursor-pointer rounded-full p-1.5 border">
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
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
