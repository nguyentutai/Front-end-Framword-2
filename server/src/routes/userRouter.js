import { Router } from "express";
import UserController from "../controllers/UserController.js";
import { checkAuth } from "../middlewares/checkAuth.js";

const userRouter = Router();

const userControll=new UserController()
userRouter.get('/',userControll.getAllUser)
userRouter.get('/:id',userControll.getUserById)
userRouter.patch("/profile/:id", checkAuth, userControll.updateUser);
userRouter.put('/:id',userControll.updateUser)
userRouter.patch('/:id',userControll.updateStatusUser)

export default userRouter
