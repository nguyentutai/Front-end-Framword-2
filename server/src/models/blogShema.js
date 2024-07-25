import mongoose from "mongoose";

const BlogModel = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    slug:{
      type: String,
      unique: true,
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("blogs", BlogModel);
