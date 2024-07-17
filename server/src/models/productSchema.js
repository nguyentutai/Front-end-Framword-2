import mongoose from "mongoose";

const ProductModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    price_discount: {
      type: Number,
      default: 0,
    },
    images: {
      type: [String],
      default: [],
    },
    status: {
      type: Boolean,
      default: false,
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "categorys",
    },
    commentId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comments",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("products", ProductModel);
