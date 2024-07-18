import mongoose from "mongoose";

const VoucherModel = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    time_end: {
      type: Date,
    },
    status: {
      type: Boolean,
      default: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    userId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("vouchers", VoucherModel);
