import { connection } from "../data/connection";
import { Request, Response } from "express";
import { gereneteId } from "..";

export const createUser = async(req: Request, res: Response): Promise<any> => {
    let erroCode = 400
    try {
        const {email, password} = req.body

        await connection("User")
        .insert({
            id: gereneteId(),
            email: email,
            password: password
        })

        res.send("User Successfully created")
    } catch(error: any){
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
}