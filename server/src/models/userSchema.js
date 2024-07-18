import mongoose from "mongoose";

const UserModel = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["member", "admin"],
      default: "member",
    },
    status: {
      type: Boolean,
      default: true,
    },
    commentId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comments",
      },
    ],
    blogId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "blogs",
      },
    ],
    orderId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "orders",
      },
    ],
    voucherId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "vouchers",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("users", UserModel);
