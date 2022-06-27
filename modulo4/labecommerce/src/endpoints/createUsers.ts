import { Request, Response } from "express";
import { connection} from "../data/connection";
import { Users } from "../type/Users";

export async function createUser(req: Request, res: Response):Promise<any> {
    let erroCode: number = 400;
    
    try{
        const{name, email, password}:Users = req.body;

        if(!name){
            erroCode = 404;
            throw new Error("The name input is empty");
        }
        if(!email || email.length < 10){
            erroCode = 404;
            throw new Error("The email input is empty");
        }
        if(!password || password.length < 6){
            erroCode = 404;
            throw new Error("The password input is empty");
        }

        await connection("labecommerce_users")
        .insert({
            id: Date.now() + Math.random().toString(),
            name,
            email,
            password,
    });

    res.status(200).send({message: "User created successfully"});

    } catch (error: any) {
    res.status(erroCode).send({message: error.message || error.sqlMessage});
    }
}