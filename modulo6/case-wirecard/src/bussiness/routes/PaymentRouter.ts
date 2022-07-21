import express from "express";
import { PaymentController } from "../../controller/PaymentController";

export const paymentRouter = express.Router();

const paymentController = new PaymentController();

paymentRouter.post("/creditPayment", paymentController.makeCreditPayment);
paymentRouter.post("/ticketPayment", paymentController.makeTicketPayment);