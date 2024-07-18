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
    productId: [{ type: mongoose.Types.ObjectId, ref: "products" }],
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
