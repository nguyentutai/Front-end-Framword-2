import { Router } from "express";
import productRouter from "./productRouter.js";
import categoryRouter from "./categoryRouter.js";
import voucherRouter from "./voucherRouter.js";
import authRouter from "./authRouter.js";
import commentRouter from "./commentRouter.js";

const router = Router();

router.use("/products", productRouter);
router.use("/categorys", categoryRouter);
router.use("/vouchers", voucherRouter);
router.use("/comments", commentRouter);
router.use("/auth", authRouter);

export default router;
