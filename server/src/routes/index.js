import { Router } from "express";
import productRouter from "./productRouter.js";
import categoryRouter from "./categoryRouter.js";
import voucherRouter from "./voucherRouter.js";
import authRouter from "./authRouter.js";

const router = Router();

router.use("/products", productRouter);
router.use("/categorys", categoryRouter);
router.use("/vouchers", voucherRouter);
router.use("/auth", authRouter);

export default router;
