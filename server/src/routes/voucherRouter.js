import { Router } from "express";
import VoucherController from "../controllers/VoucherController.js";

const voucherRouter = Router();
const VoucherModel = new VoucherController();

// Lấy tất cả voucher
voucherRouter.get("/", VoucherModel.getAllVoucher);
// Lấy voucher theo id
voucherRouter.get("/:id", VoucherModel.getVoucherById);
// Thêm voucher
voucherRouter.post("/", VoucherModel.postVoucher);
// Sửa voucher
voucherRouter.put("/:id", VoucherModel.updateVoucher);
// Xóa cứng voucher
voucherRouter.delete("/:id", VoucherModel.removeVoucherById);
// Xóa mềm voucher
voucherRouter.patch("/:id", VoucherModel.softRemoveVoucherById);

export default voucherRouter;
