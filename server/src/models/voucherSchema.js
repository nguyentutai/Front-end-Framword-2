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
      default: false,
    },
    discount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("vouchers", VoucherModel);
