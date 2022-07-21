import { Card } from "../models/Card";
import { BaseDatabse } from "./BaseDatabase";


export class CardDatabase extends BaseDatabse {
    insertCard = async(card: Card) => {
        await this.connection("card_wirecard")
        .insert({
            id: card.id,
            number: card.number,
            name: card.name,
            expiration: card.expiration,
            cvv: card.cvv,
            user_id: card.user_id
        })
    }

    getCardById = async(id: string) => {
    const result = await this.connection("card_wirecard")
    .select("*")
    .where({id: id})
    return {
        id: result[0].id,
        name: result[0].name,
        email: result[0].email,
        cpf: result[0].cpf,
        password: result[0].password
    }
}}