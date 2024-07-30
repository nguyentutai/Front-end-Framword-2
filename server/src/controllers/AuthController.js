import userSchema from "../models/userSchema.js";
import bcrypjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    // kiểm tra email có tồn tại chưa
    const checkMail = await userSchema.findOne({ email });
    if (checkMail) {
      return res.status(409).send({
        message: "Email is already exists",
      });
    }
    // mã hóa mật khẩu
    const passwordHash = await bcrypjs.hash(password, 10);
    if (!passwordHash) {
      return res.status(409).send({
        message: "Register False",
      });
    }
    // Thêm mới lên data base
    const data = await userSchema.create({
      ...req.body,
      password: passwordHash,
    });
    data.password = undefined;
    if (data) {
      return res.status(201).send({
        message: "Register Successfully",
        data,
      });
    }
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Kiểm tra email tồn tại chưa
    const userExist = await userSchema
      .findOne({ email })
      .select("-commentId -blogId -createdAt -orderId -updatedAt -voucherId");
    if (!userExist) {
      return res.status(400).json({ message: "Account does not exist" });
    }

    // Kiểm tra password có khớp không
    if (!(await bcrypjs.compare(password, userExist.password))) {
      return res.status(400).json({ message: "Incorrect Password" });
    }

    // Tạo token
    const token = jwt.sign({ id: userExist._id }, process.env.JWT_TOKEN, {
      expiresIn: "2h",
    });

    // Trả về token cho người dùng
    userExist.password = undefined;
    return res.status(201).json({
      message: "Login Successfully",
      token,
      data: userExist,
    });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
