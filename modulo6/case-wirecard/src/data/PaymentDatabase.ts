import { TicketPayment } from './../models/Payment';
import { CreditPayment } from "../models/Payment";
import BaseDatabase from './BaseDatabase';

export class PaymentDatabase extends BaseDatabase {

    protected tableName: string = "payment_wirecard";

    private toModelCredit(dbModel?: any): CreditPayment | undefined {
        return (
           dbModel &&
           new CreditPayment(
              dbModel.id,
              dbModel.amount,
              dbModel.payment,
              dbModel.credit_card,
              dbModel.payment_situation,
              dbModel.user_id
           )
        );
     }

     private toModelTickt(dbModel?: any): TicketPayment | undefined {
        return (
           dbModel &&
           new TicketPayment(
            dbModel.id,
            dbModel.amount,
            dbModel.payment,
            dbModel.payment_situation,
            dbModel.id_ticket,
            dbModel.user_id
           )
        );
     }

    public async makeCreditPayment(payment: CreditPayment): Promise<void> {
        try{
            await BaseDatabase.connection.raw(`
                INSERT INTO ${this.tableName} (id, amount, payment, credit_card, payment_situation, user_id)
                VALUES (
                '${payment.getId()}', 
                '${payment.getAmount()}', 
                '${payment.getPayment()}',
                '${payment.getCreditCard()}',
                '${payment.getPaymentSituation()}',
                '${payment.getUserId()}'
                )`
            )
        }catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    };

    public async makeTicketPayment(payment: TicketPayment): Promise<void> {
        try{
            await BaseDatabase.connection.raw(`
                INSERT INTO ${this.tableName} (id, amount , payment, payment_situation, id_ticket, user_id)
                VALUES (
                '${payment.getId()}', 
                '${payment.getAmount()}', 
                '${payment.getPayment()}',
                '${payment.getPaymentSituation()}',
                '${payment.getIdTicket()}',
                '${payment.getUserId()}'
            )`
        );
        }catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        };
    }

    public async getPaymentUserId(id: string): Promise<any>{
        try {
            const result = await BaseDatabase.connection(this.tableName)
            .select("*")
            .where({user_id: id})
            return result[0]
        } catch(error: any){
            throw new Error(error.sqlMessage || error.message)
        }
    }
}