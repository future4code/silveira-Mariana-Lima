import { CardDatabase } from './../data/CardDatabase';
import { HashManager } from '../services/HashManager';
import { IdGenerator} from './../services/IdGenerator';
import { Authenticator } from '../services/Authenticator';
import { UserDatabase } from '../data/UserDatabase';


const idGenerator = new IdGenerator()
const hashManager = new HashManager()
const cardDatabase = new CardDatabase()
const authenticator = new Authenticator()
const userDatabase = new UserDatabase()

export class CardBussiness {
    insertCard = async(number: string, name: string, expiration: string, cvv: string, token: string) => {
        if(!number){
            throw new Error("The number input is empty")
        } else if(number.length < 16) {
            throw new Error("Your number must be contain 16 numbers")
        }
        if(!name){
            throw new Error("The name input is empty")
        }
        if(!expiration){
            throw new Error("The expiration input is empty || ex: YYYY/MM/DD")
        }
        if(!cvv){
            throw new Error("The cvv input is empty")
        }else if(cvv.length !== 3){
            throw new Error("Your card cvv must have 3 numbers")
        }
        if(!token){
            throw new Error("You have to login to create a card")
        }

        const id = idGenerator.generateId()
        const cypherCvv = await hashManager.hash(cvv)

        const getToken = authenticator.getTokenData(token)

        await cardDatabase.insertCard({
            id: id,
            number: number,
            name: name,
            expiration: expiration,
            cvv: cypherCvv,
            user_id: getToken.id
        })
    }
}