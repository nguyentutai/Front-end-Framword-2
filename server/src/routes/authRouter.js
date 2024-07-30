import { Router } from "express";
import { login, register } from "../controllers/AuthController.js";
import validBodyRequest from "../middlewares/vlidateBodyReq.js";
import {
  loginSchemaValide,
  registerSchemaValide,
} from "../validations/authValidate.js";
import forgotPassword from "../controllers/ForgotPassword.js";

const authRouter = Router();

authRouter.post("/register", validBodyRequest(registerSchemaValide), register);

authRouter.post("/login", validBodyRequest(loginSchemaValide), login);

authRouter.post('/forgot-password',forgotPassword)

// authRouter.get("/login-success/:id", loginSuscess);
export default authRouter;
