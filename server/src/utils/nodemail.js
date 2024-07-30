import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const { EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;

export const sendEmail = async (email, emailSubject, emailBody, emailText) => {
	try {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: EMAIL_USERNAME,
				pass: EMAIL_PASSWORD,
			},
		});

		const mailOptions = {
			from: 'Hệ Thống Game Mart - Cửa Hàng Bán Phụ Kiện Gaming',
			to: email,
			subject: emailSubject,
            html: emailBody,
			text: emailText
		};

		await transporter.sendMail(mailOptions);
	} catch (error) {
		throw new Error("Error sending email: " + error.message);
	}
};