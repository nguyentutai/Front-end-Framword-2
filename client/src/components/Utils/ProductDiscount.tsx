import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
const ProductDiscount = () => {
  return (
    <div className="rounded-2xl bg-white shadow-lg flex p-4 gap-5 relative m-2">
      <div className="max-w-[200px] relative">
        <img
          src="https://hex-wp.com/gamemart/wp-content/uploads/2024/03/hard_image_2-600x600.jpg"
          alt="First"
          className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-0"
        />
        <img
          src="https://hex-wp.com/gamemart/wp-content/uploads/2024/03/hard_image_14.jpg"
          alt="Second"
          className="w-full h-full object-cover transition-opacity duration-700 opacity-0 hover:opacity-100 absolute top-0 left-0"
        />
      </div>
      <div>
        <h3 className="text-base">Gaming Special Headset</h3>
        <div className="py-3">
          <Rating
            name="disabled"
            value={4}
            className="pointer-events-none !text-[16px]"
          />
        </div>
        <div className="flex gap-2 items-center">
          <p className="font-bold text-base">$199.00</p>
          <p className="line-through text-sm">$199.00</p>
        </div>
        <div className="flex gap-4 pt-4">
          <button className="bg-primary rounded-2xl py-2 px-3 text-xs text-white opacity-70 font-medium hover:opacity-100">
            Add to Card
          </button>
          <Link
            to={""}
            className="bg-red-600 rounded-2xl py-2 px-3 text-xs text-white opacity-70 font-medium hover:opacity-100"
          >
            Show Detail
          </Link>
        </div>
      </div>
      <div className="absolute">
        <p className="bg-red-600 rounded-full px-2 py-0.5 text-sm text-util">
          -10%
        </p>
      </div>
    </div>
  );
};

export default ProductDiscount;
