export class Card {
    constructor(
        private id: string,
        private number: string,
        private name: string,
        private expiration: string,
        private cvv: string,
        private user_id: string
    ){}

    public getId(): string{
        return this.id;
    }

    public getNumber(): string{
        return this.number;
    }

    public getName(): string{
        return this.name;
    }

    public getExpiration(): string{
        return this.expiration;
    }

    public getCVV(): string{
        return this.cvv;
    }

    public getUserId(): string{
        return this.user_id;
    }    
}