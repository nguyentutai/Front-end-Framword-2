import { Router } from "express";
import UserController from "../controllers/UserController.js";
import { checkAuth } from "../middlewares/checkAuth.js";

const userRouter = Router();

const UserModel = new UserController();

userRouter.patch("/profile/:id", checkAuth, UserModel.updateUser);

export default userRouter;
