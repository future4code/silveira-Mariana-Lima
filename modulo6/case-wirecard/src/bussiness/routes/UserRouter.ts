import { PaymentController } from './../../controller/PaymentController';
import { UserController } from './../../controller/UserController';
import express from "express";

export const userRouter = express.Router();

const userController = new UserController();
const paymentController = new PaymentController()

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);

userRouter.get("/payment", paymentController.getPayment)