import {Request, Response} from "express";
import { connection } from "../connection";
import { HashManager, User } from "../services/types";
import { generateId } from "../services/uuid";

export const singUp = async(req: Request, res: Response): Promise<any> => {
    try{
        const {name, email, password} = req.body
        const id = generateId()

        if(!name){
            res.status(406).send("The name input is missing");
        }
        if(!email){
            res.status(406).send("The email input is missing");
        }
        if(!password){
            res.status(406).send("The password input is missing");
        }else if(password.length <= 6){
            res.status(406).send("The password be longer then 6 caracters");
        }

        const hashManager: HashManager = new HashManager()
        const hashPassword = hashManager.generateHash(password)

        const response: User = await connection("cookenu_user")
        .insert({
            id:id,
            name: name,
            email: email,
            password: hashPassword
        })
        res.status(201).send("User successfully created");
    }catch(error:any){
        res.status(400).send(error.sqlMessage || error.message)
    }
}