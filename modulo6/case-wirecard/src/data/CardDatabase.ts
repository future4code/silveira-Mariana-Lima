import { CustomError } from "../bussiness/error/CustomError";
import { Card } from "../models/Card";
import BaseDatabase  from "./BaseDatabase";


export class CardDatabase extends BaseDatabase {

    protected tableName: string = "card_wirecard";

    private toModel(dbModel?: any): Card | undefined {
        return(dbModel && new Card (
            dbModel.id,
            dbModel.number,
            dbModel.name,
            dbModel.expiration,
            dbModel.cvv,
            dbModel.user_id
        ));
    };

    public async createCard(card: Card): Promise<void> {
        try{
            await BaseDatabase.connection.raw(`
                INSERT INTO ${this.tableName} (id, number, name, expiration, cvv, user_id)
                VALUES (
                '${card.getId()}', 
                '${card.getNumber()}', 
                '${card.getName()}',
                '${card.getExpiration()}',
                '${card.getCVV()}',
                '${card.getUserId()}'
            )`
        );
        }catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        };
    }

    public async getCardById(id: string): Promise<Card | undefined> {
        try{
            const result = await BaseDatabase.connection.raw(`
                SELECT * from ${this.tableName} WHERE id = '${id}'
            `);
            return this.toModel(result[0][0]);
        }catch(error: any){
            throw new Error(error.sqlMessage || error.message)
        }
    }
}