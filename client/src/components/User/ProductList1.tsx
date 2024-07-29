import { Rating } from "@mui/material";
import { IProduct } from "../../interfaces/IProduct";

export default function ProductList1({ product }: { product: IProduct }) {
  return (
    <div className="text-center max-h-[400px] relative overflow-hidden group shadow-catelist rounded-xl py-5 dark:bg-util">
      <div className="max-w-[200px] min-h-56 flex items-center relative mx-auto rounded-xl overflow-hidden ">
        <img
          src={product.images[0]}
          alt="First"
          className="w-full h-full object-cover  transition-opacity duration-300 hover:opacity-0"
        />
        <img
          src={product.images[1]}
          alt="Second"
          className="w-full h-full object-cover transition-opacity duration-700 opacity-0 hover:opacity-100 absolute top-0 left-0"
        />
      </div>
      <div>
        <span className="text-xs text-black/50 ">
          {product.categoryId.name}
        </span>
      </div>
      <div>
        <h3 className="py-2 text-base dark:text-black px-4 overflow-hidden text-ellipsis whitespace-nowrap">
          {product.name}
        </h3>
      </div>
      <div className="pb-2">
        <span className="text-base font-bold dark:text-black">
          ${product.price.toFixed(1)}
        </span>
      </div>
      <div>
        <Rating
          name="disabled"
          value={4}
          className="pointer-events-none !text-[16px]"
        />
      </div>
      <div className="absolute top-8 right-0 space-y-3 translate-x-12 group-hover:-translate-x-4 duration-500">
        <div className="bg-primary rounded-full text-util p-1.5 cursor-pointer opacity-100 hover:opacity-80 duration-500">
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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
        <div className="bg-primary rounded-full text-util p-1.5 cursor-pointer opacity-100 hover:opacity-80 duration-500">
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
        <div className="bg-primary rounded-full text-util p-1.5 cursor-pointer opacity-100 hover:opacity-80 duration-500">
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
  );
}
