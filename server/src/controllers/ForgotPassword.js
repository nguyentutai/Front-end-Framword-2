import userSchema from "../models/userSchema.js";
import password from "secure-random-password";
import bcryptjs from "bcryptjs";
import Mailgen from "mailgen";
import { sendEmail } from "../utils/nodemail.js";
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userSchema.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "Không tồn tại tài khoản này !",
      });
    }

    const newPassword = password.randomPassword({
      characters: password.lower + password.upper + password.digits,
    });
    const salt = bcryptjs.genSaltSync(10);
    const hasPassword = await bcryptjs.hash(newPassword, salt);

    if (!hasPassword) {
      return res.status(500).json({
        message: "Mã hóa mật khẩu thất bại !",
      });
    }

    user.password = hasPassword;
    await user.save();

    const mailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Game Mart",
        link: "http://localhost:5173/",
        logo: "https://res.cloudinary.com/dgn4zfscw/image/upload/v1722275237/logo_homepage_3_royfkf.png",
      },
    });
    const emailForm = {
      body: {
        name: user.username,
        intro:
          "Bạn nhận được email này vì chúng tôi đã nhận được yêu cầu đặt lại mật khẩu cho tài khoản của bạn. Không chia sẻ mật khẩu này cho bất cứ ai !",
        action: {
          instructions: `Đây là mật khẩu mới của bạn: <b>${newPassword}</b>`,
          button: {
            color: "#1B95F2",
            text: "Đăng nhập",
            link: "http://localhost:5173/login",
            fallback: true,
          },
        },
        outro:
          "Hãy đổi mật khẩu mới ngay sau khi đăng nhập thành công để bảo mật tài khoản của bạn.",
      },
    };
    const emailSubject = `Hệ thống Game Mart xác nhận quên mật khẩu bởi ${user.username}.`;
    const emailBody = mailGenerator.generate(emailForm);
    const emailText = mailGenerator.generatePlaintext(emailForm);

    await sendEmail(email, emailSubject, emailBody, emailText);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

export default forgotPassword;
