import { Authenticator } from './../services/Authenticator';
import { CardDatabase } from '../data/CardDatabase';
import { PaymentDatabase } from './../data/PaymentDatabase';
import { IdGenerator } from './../services/IdGenerator';


const idGenerator = new IdGenerator()
const paymentDatabase = new PaymentDatabase()
const cardDatabase = new CardDatabase()
const authenticator = new Authenticator()

export class PaymentBussiness {
    makeCreditPayment = async(amount: number, credit_card: string, token: string) => {
        if(!amount){
            throw new Error("The amount input is empty")
        }
        if(!credit_card){
            throw new Error("The credit card input is empty")
        }
        if(!token){
            throw new Error("The token input is empty")
        } else if(token.length < 167){
            throw new Error("Verify your authorization")
        }

        const id = idGenerator.generateId()
        const userId = authenticator.getTokenData(token)
        const card = await cardDatabase.getCardByNumber(credit_card)

        if(!card){
            throw new Error("Incorrect card")
        }

        await paymentDatabase.makeCreditPayment({
            id: id,
            amount: amount,
            payment: "Credit card",
            credit_card: credit_card,
            payment_situation: "Paid",
            user_id: userId.id
        })
    }

    makeTicketPayment = async(amount: number, token: string) => {
        if(!amount){
            throw new Error("The amount input is empty")
        }
        if(!token){
            throw new Error("The token input is empty")
        } else if(token.length < 167){
            throw new Error("Verify your authorization")
        }

        const userId = authenticator.getTokenData(token)
        const id = idGenerator.generateId()
        const ticketId = idGenerator.generateId()

        await paymentDatabase.makeTicketPayment({
            id: id,
            amount: amount,
            payment: "Ticket",
            payment_situation: "Waiting Payment",
            id_tickert: ticketId,
            user_id: userId.id
        })

        return ticketId
    }

    getPayment = async(token: string) => {
        if(!token){
            throw new Error("The token input is empty")
        } else if(token.length < 167){
            throw new Error("Verify your authorization")
        }

        const getTokenData = authenticator.getTokenData(token)
        const result = await paymentDatabase.getPaymentUserId(getTokenData.id)
        return result
    }
}