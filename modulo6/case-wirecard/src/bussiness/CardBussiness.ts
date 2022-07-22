import { Card } from './../models/Card';
import { CardDatabase } from './../data/CardDatabase';
import { HashManager } from '../services/HashManager';
import { IdGenerator} from './../services/IdGenerator';
import { Authenticator } from '../services/Authenticator';
import { CustomError } from './error/CustomError';

export class CardBussiness {
    constructor(
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private cardDatabase: CardDatabase,
        private authenticator: Authenticator,
    ){}

    public async insertCard(
        number: string,
        name: string, 
        expiration: string, 
        cvv: string, 
        token: string
        ){
            try{
                if(!number){
                    throw new CustomError(422,"The number input is empty");
                } else if(number.length < 16) {
                    throw new CustomError(422,"Your number must be contain 16 numbers");
                };
                
                if(!name){
                    throw new CustomError(422,"The name input is empty");
                };
                
                if(!expiration){
                    throw new CustomError(422,"The expiration input is empty || ex: YYYY/MM/DD");
                };

                if(!cvv){
                    throw new CustomError(422,"The cvv input is empty");
                }else if(cvv.length !== 3){
                    throw new CustomError(422,"Your card cvv must have 3 numbers");
                };
                
                if(!token){
                    throw new CustomError(422,"You have to login to create a card");
                };
                
                const id = this.idGenerator.generateId();
                const cypherCvv = await this.hashManager.hash(cvv);
                const getToken = this.authenticator.getTokenData(token);
                const card = new Card(id, number, name, expiration, cypherCvv, getToken.id)
                
                await this.cardDatabase.createCard(card);

            }catch(error: any){
                throw new CustomError(error.statusCode, error.message)
            }
    }
} 

export default new CardBussiness(
    new IdGenerator(),
    new HashManager(),
    new CardDatabase(),
    new Authenticator()
)