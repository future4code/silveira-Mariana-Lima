import { Request, Response } from 'express';
import { PaymentBussiness } from './../bussiness/PaymentBussines';


const paymentBussiness = new PaymentBussiness()

export class PaymentController {
    makeCreditPayment = async(req: Request, res: Response) => {
        try{
            const { amount, credit_card} = req.body
            const token = req.headers.authorization as string
            const response = await paymentBussiness.makeCreditPayment(amount, credit_card, token)
            res.status(201).send("Purchase made successfully")
        }catch(error: any) {
            res.status(400).send(error.sqlMessage || error.message);
        } 
    }

    makeTicketPayment = async(req: Request, res: Response) => {
        try {
            const { amount } = req.body
            const token = req.headers.authorization as string
            const response = await paymentBussiness.makeTicketPayment(amount, token)
            res.status(201).send({response})
        }catch(error: any) {
            res.status(400).send(error.sqlMessage || error.message);
        } 
    }

    getPayment = async(req: Request, res: Response) => {
        try{
            const token = req.headers.authorization as string
            const result = await paymentBussiness.getPayment(token)
            res.status(200).send(result)
        }catch(error: any) {
            res.status(400).send(error.sqlMessage || error.message);
        } 
    }
}