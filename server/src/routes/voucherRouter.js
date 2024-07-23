import { Router } from "express";
import VoucherController from "../controllers/VoucherController.js";
import validBodyRequest from "../middlewares/vlidateBodyReq.js";
import voucherSchemaValid from "../validations/voucherValidate.js";

const voucherRouter = Router();
const VoucherModel = new VoucherController();

// Lấy tất cả voucher
voucherRouter.get("/", VoucherModel.getAllVoucher);
// Lấy voucher theo id
voucherRouter.get("/:id", VoucherModel.getVoucherById);
// Xóa cứng voucher
voucherRouter.delete("/:id", VoucherModel.removeVoucherById);
// Validate
voucherRouter.use("/", validBodyRequest(voucherSchemaValid));
// Thêm voucher
voucherRouter.post("/", VoucherModel.postVoucher);
// Sửa voucher
voucherRouter.put("/:id", VoucherModel.updateVoucher);
// Xóa mềm voucher
voucherRouter.patch("/:id", VoucherModel.softRemoveVoucherById);

export default voucherRouter;
