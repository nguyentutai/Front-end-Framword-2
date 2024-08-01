import { Router } from "express";
import OrderController from "../controllers/OrderController.js";
import SendOrderMail from "../controllers/SendOrderMail.js";

const orderRouter = Router();

const OrderModel = new OrderController();
// Lấy toàn bộ đơn hàng
orderRouter.get("/", OrderModel.getAllOrders);
// Lấy đơn hàng theo id
orderRouter.get("/:id", OrderModel.getOrderById);
orderRouter.get("/detail/:userId", OrderModel.getOrderByUser);
// Thêm đơn hàng
orderRouter.post("/", OrderModel.addOrder, SendOrderMail);

// orderRouter.post("/send-mail-order/:id", );
// Cập nhật trạng thái đơn hàng
orderRouter.put("/:id", OrderModel.updateStatusOrder);

export default orderRouter;
