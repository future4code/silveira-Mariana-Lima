import { Request, Response } from "express";
import cardBussiness  from "../bussiness/CardBussiness";

export class CardController {

    public async insertCard(req: Request, res: Response){
        try {
            const { number, name, expiration, cvv } = req.body
            const token = req.headers.authorization as string
            const result = await cardBussiness.insertCard(number, name, expiration, cvv, token)
            res.status(201).send("Card successfully created")
        } catch (error: any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message });
         }}
} 