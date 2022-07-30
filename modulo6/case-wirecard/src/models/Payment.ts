export class CreditPayment {
    constructor(
        private id: string,
        private amount: number,
        private payment: string,
        private credit_card: string,
        private payment_situation: string,
        private user_id: string
    ) {}

    public getId(): string{
        return this.id;
    }

    public getAmount(): number{
        return this.amount;
    }

    public getPayment(): string{
        return this.payment;
    }

    public getCreditCard(): string{
        return this.credit_card;
    }

    public getPaymentSituation(): string{
        return this.payment_situation;
    }

    public getUserId(): string{
        return this.user_id;
    }
    
}

export class TicketPayment {
    constructor(
        private id: string,
        private amount: number,
        private payment: string,
        private payment_situation: string,
        private id_ticket: string,
        private user_id: string 
    ){}

    public getId(): string{
        return this.id;
    }

    public getAmount(): number{
        return this.amount;
    }

    public getPayment(): string{
        return this.payment;
    }

    public getPaymentSituation(): string{
        return this.payment_situation;
    }

    public getIdTicket(): string{
        return this.id_ticket;
    }

    public getUserId(): string{
        return this.user_id;
    } 
}