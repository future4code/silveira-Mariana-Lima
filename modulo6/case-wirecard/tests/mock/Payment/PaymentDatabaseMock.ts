import { CreditPayment, TicketPayment } from './../../../src/models/Payment';


export class PaymentDatabaseMock {
    public async makeCreditPayment(payment: CreditPayment): Promise<void> {

    }

    public async makeTicketPayment(payment: TicketPayment): Promise<void> {
        
    }
}