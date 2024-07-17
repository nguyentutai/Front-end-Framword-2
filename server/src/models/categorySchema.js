import mongoose from "mongoose";

const CategoryModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    productId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        default: "66979f7841d46e0b5018548f",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("categorys", CategoryModel);
