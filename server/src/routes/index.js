import { Router } from "express";
import productRouter from "./productRouter.js";
import categoryRouter from "./categoryRouter.js";
import voucherRouter from "./voucherRouter.js";
import authRouter from "./authRouter.js";
import commentRouter from "./commentRouter.js";
import blogRouter from "./blogRouter.js";
import userRouter from "./userRouter.js";
import cartRouter from "./cartRouter.js";

const router = Router();

router.use("/products", productRouter);
router.use("/categorys", categoryRouter);
router.use("/users", userRouter);
router.use("/blogs", blogRouter);
router.use("/vouchers", voucherRouter);
router.use("/comments", commentRouter);
router.use("/auth", authRouter);
router.use("/cart", cartRouter);

export default router;
