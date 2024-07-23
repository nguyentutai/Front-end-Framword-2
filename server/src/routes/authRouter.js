import { Router } from "express";
import { login, register } from "../controllers/AuthController.js";
import validBodyRequest from "../middlewares/vlidateBodyReq.js";
import {
  loginSchemaValide,
  registerSchemaValide,
} from "../validations/authValidate.js";

const authRouter = Router();

authRouter.post("/register", validBodyRequest(registerSchemaValide), register);

authRouter.post("/login", validBodyRequest(loginSchemaValide), login);

export default authRouter;
