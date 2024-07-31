import Mailgen from "mailgen";
import orderSchema from "../models/orderSchema.js";
import { sendEmail } from "../utils/nodemail.js";

const SendOrderMail = async (req, res) => {
  try {
    const order = await orderSchema
      .findById(req.params.id)
      .populate({
        path: "userId",
        options: {
          select: "-password -role",
        },
      })
      .populate({
        path: "productItem",
        populate: {
          path: "productId",
          model: "products",
        },
      });

    // return res.send({order})
    const mailGenerator = new Mailgen({
      theme: "salted",
      product: {
        name: "Game Mart",
        link: "http://localhost:5173/",
        logo: "https://res.cloudinary.com/dgn4zfscw/image/upload/v1722275237/logo_homepage_3_royfkf.png",
      },
    });

    const tableData = order.productItem.map((item) => {
      return {
        name: item.productId.name,
        quantity: item.quantity,
        price: `$${item.productId.price_discount}`,
      };
    });

    const emailForm = {
      body: {
        name: order.userId.username,
        table: {
          data: tableData,
          columns: [
            {
              header: "Product Name",
              width: "30%",
            },
            {
              header: "Quantity",
            },
            {
              header: "Price",
              width: "20%",
              align: "right",
            },
          ],
        },
        action: {
          instructions: "Bạn vui lòng check đơn hàng của mình !",
          button: {
            color: "#3869D4",
            text: "Go to Dashboard",
            link: "http://localhost:5173",
          },
        },
        dictionary: {
          name:order.name_shopping,
          address: order.address_shopping,
        },
      },
    };
    const emailSubject = `Hệ thống Game Mart xác nhận đơn đặt hàng bởi ${order.userId.username}.`;

    var emailBody = mailGenerator.generate(emailForm);

    var emailText = mailGenerator.generatePlaintext(emailForm);

    await sendEmail(order.userId.email, emailSubject, emailBody, emailText);
  } catch (error) {
    throw new Error("Error sending email: " + error.message);
  }
};

export default SendOrderMail;
