import mongoose from "mongoose";

const OrderModel = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
    code_Order: {
      type: String,
      unique: true,
      required: true,
    },
    totalPrice: {
      type: Number,
    },
    name_shopping: {
      type: String,
    },
    address_shopping: {
      type: String,
    },
    phone_shopping: {
      type: String,
    },
    subtotalPrice: {
      type: Number,
    },
    productItem: [
      {
        productId: {
          name: String,
          price: Number,
          price_discount: Number,
          images: [String],
          category: String,
        },
        quantity: Number,
      },
    ],
    status: {
      type: String,
      enum: ["Chờ xác nhận", "Đang xử lý", "Hoàn thành", "Đã hủy bỏ"],
      default: "Chờ xác nhận",
    },
    isHidden: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("orders", OrderModel);
