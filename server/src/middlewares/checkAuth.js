import jwt from "jsonwebtoken";
import userSchema from "../models/userSchema.js";
import dotenv from "dotenv";
dotenv.config();

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
    const decode = jwt.verify(token, process.env.JWT_TOKEN);
    if (!decode) {
      return res.status(400).json({
        message: "Bạn không có quyền truy cập",
      });
    }
    const user = await userSchema.findById(decode.id);
    // Đẩy dữ liệu lên response
    req.user = user;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Token đã hết hạn, vui lòng đăng nhập lại",
      });
    }
    return res.status(400).json({
      message: "Vui lòng đăng nhập lại",
    });
  }
};
