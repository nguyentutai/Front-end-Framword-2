import { Router } from "express";
import productRouter from "./productRouter.js";
import categoryRouter from "./categoryRouter.js";

const router = Router();

router.use("/product", productRouter);
router.use("/categorys", categoryRouter);

export default router;
