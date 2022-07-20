import { TicketPayment } from './../models/Payment';
import { CreditPayment } from "../models/Payment";
import { BaseDatabse } from "./BaseDatabase";


export class PaymentDatabase extends BaseDatabse {
    makeCreditPayment = async(payment: CreditPayment) => {
        await this.connection("payment_wirecard")
        .insert({
            id: payment.id,
            amount: payment.amount,
            payment: payment.credit_card,
            payment_situation: "Paid",
            user_id: payment.user_id
        })
    }

    makeTicketPayment = async(payment: TicketPayment) => {
        await this.connection("payment_wirecard")
        .insert({
            id: payment.id,
            amount: payment.amount,
            payment: payment.payment,
            payment_situation: "Waitong payment",
            id_ticket: payment.id_tickert,
            user_id: payment.user_id 
        })
    }

    getPaymentUserId = async(id: string) => {
        try {
            const result = await this.connection("payment_wirecard")
            .select("*")
            .where({user_id: id})
            return result
        } catch(error: any){
            throw new Error(error.message)
        }
    }
}