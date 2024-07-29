import mongoose from "mongoose";

const OrderModel = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
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
    cartItem: { type: mongoose.Types.ObjectId, ref: "cart" },
    status: {
      type: String,
      enum: ["pending", "processing", "completed", "cancelled"],
      default: "pending",
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
