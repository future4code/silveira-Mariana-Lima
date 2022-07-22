import { Request, Response } from 'express';
import paymentBussiness  from './../bussiness/PaymentBussines';

export class PaymentController {
    public async makeCreditPayment(req: Request, res: Response){
        try{
            const { amount, credit_card} = req.body
            const token = req.headers.authorization as string
            const response = await paymentBussiness.makeCreditPayment(amount, credit_card, token)
            res.status(201).send("Purchase made successfully")
        }catch(error: any) {
            const {statusCode, message } = error
            res.status( statusCode || 400).send(error.sqlMessage || {message});
        }};

    public async makeTicketPayment(req: Request, res: Response){
        try {
            const { amount } = req.body
            const token = req.headers.authorization as string
            const response = await paymentBussiness.makeTicketPayment(amount, token)
            res.status(201).send({"Ticket id":response})
        }catch(error: any) {
            const {statusCode, message } = error
            res.status( statusCode || 400).send(error.sqlMessage || {message});
        }};

    public async getPaymentUserId(req: Request, res: Response){
        try{
            const token = req.headers.authorization as string
            const payment = await paymentBussiness.getPaymentUserId(token)
            res.status(200).send({message: "Sucess", payment})
        }catch(error: any) {
            const {statusCode, message } = error
            res.status( statusCode || 400).send(error.sqlMessage || {message});
        }};
}