import { UserDatabase } from './../data/UserDatabase';
import { UserBussiness } from './UserBussiness';
import { Authenticator } from './../services/Authenticator';
import { CardDatabase } from '../data/CardDatabase';
import { PaymentDatabase } from './../data/PaymentDatabase';
import { IdGenerator } from './../services/IdGenerator';
import { CustomError } from './error/CustomError';
import { CreditPayment, TicketPayment } from '../models/Payment';

export class PaymentBussiness {
    constructor(
        private idGenerator: IdGenerator,
        private authenticator: Authenticator,
        private cardDatabase: CardDatabase,
        private paymentDatabase: PaymentDatabase
    ){}

    public async makeCreditPayment(
        amount: number, 
        credit_card: string,
        token: string
        ){
            try{
                if(!amount){
                    throw new CustomError(422,"The amount input is empty");
                };
                
                if(!credit_card){
                    throw new CustomError(422,"The credit card input is empty");
                };

                if(!token){
                    throw new CustomError(422,"The token input is empty");
                }else if(token.length < 167){
                    throw new CustomError( 422,"Verify your authorization");
                };

                const id = this.idGenerator.generateId();
                const userId = this.authenticator.getTokenData(token);
                const card = await this.cardDatabase.getCardById(credit_card);
                
                if(!card){
                    throw new CustomError( 422,"Incorrect card")
                }

                const payment = new CreditPayment(id, amount, "Credit card", credit_card, "Paid", userId.id)
                
                await this.paymentDatabase.makeCreditPayment(payment);
            }catch (error: any){
                throw new CustomError(error.statusCode, error.message)
            };                    
    };

    public async makeTicketPayment(amount: number, token: string){
        try{
            if(!amount){
                throw new CustomError(422,"The amount input is empty");
            };
            
            if(!token){
                throw new CustomError(422,"The token input is empty");
            }else if(token.length < 167){
            throw new CustomError(422,"Verify your authorization");
            }

            const userId = this.authenticator.getTokenData(token);
            const id = this.idGenerator.generateId();
            const ticketId = this.idGenerator.generateId();
            const payment = new TicketPayment(id, amount, "Ticket", "Waiting Payment", ticketId, userId.id)

        await this.paymentDatabase.makeTicketPayment(payment)

        return ticketId
        
        }catch (error: any){
            throw new CustomError(error.statusCode, error.message)
        };
    };
       
    public getPaymentUserId = async(token: string) => {
        if(!token){
            throw new Error("The token input is empty")
        } else if(token.length < 167){
            throw new Error("Verify your authorization")
        }

        const getTokenData = this.authenticator.getTokenData(token)
        const result = await this.paymentDatabase.getPaymentUserId(getTokenData.id)
        return result
    }
};

export default new PaymentBussiness(
    new IdGenerator(),
    new Authenticator(),
    new CardDatabase(),
    new PaymentDatabase()
)

