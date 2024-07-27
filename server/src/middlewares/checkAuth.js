import jwt from "jsonwebtoken";
import userSchema from "../models/userSchema.js";

export const checkAuth = async (req, res, next) => {
  try {
    // Lấy token từ người dùng
    const token = req.headers?.authorization?.split(" ")[1];
    if (!token) {
      return res.status(400).json({
        message: "Bạn không có quyền truy cập",
      });
    }
    // Kiểm tra xem token đó có chính xác không
    const decode = jwt.verify(token);
    if (!decode) {
      return res.status(400).json({
        message: "Bạn không có quyền truy cập",
      });
    }
    const user = await userSchema.findById(decode._id);
    // Đẩy dữ liệu lên response
    req.user = user;
    next();
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
