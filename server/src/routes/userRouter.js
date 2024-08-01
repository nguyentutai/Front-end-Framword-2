import { Router } from "express";
import UserController from "../controllers/UserController.js";
import { checkAuth } from "../middlewares/checkAuth.js";

const userRouter = Router();

const userControll = new UserController();
userRouter.get("/", userControll.getAllUser);
userRouter.get("/:id", userControll.getUserById);
userRouter.put("/profile", checkAuth, userControll.updateUser);
userRouter.put("/:id", userControll.updateUser);
userRouter.patch("/:id", userControll.updateStatusUser);
userRouter.patch("/role/:id", userControll.updateRoleUser);

export default userRouter;
