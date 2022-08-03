import { CreditPayment, TicketPayment } from "./../../../src/models/Payment"

export const creditPaymentMock = new CreditPayment(
    "id_payment_1",
    12345,
    "Credit Card",
    "1234567890123456",
    "Paid",
    "id_user_1"
    
)

export const ticketPaymentMock = new TicketPayment(
    "id_payment_1",
    12345,
    "Ticket",
    "Waiting payment",
    "id_ticket_1",
    "id_user_1"    
)