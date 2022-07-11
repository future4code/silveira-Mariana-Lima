import { Request, Response } from "express";
import { generateToken, gereneteId } from "..";
import { connection } from "../data/connection";

export const Signup = async(req: Request, res: Response):Promise<any> => {
    let erroCode = 400
    try {
        const {email, password} = req.body

        if(!email || email.indexof("@") === -1) {
            erroCode = 422
            throw new Error("Invalid email")
        }
        if(!password || password.length < 6){
            erroCode = 422
            throw new Error("Invalid password")
        }

        const id = gereneteId()

        await connection("User")
        .insert({
            id: id,
            email: email,
            password: password
        })

        const token = generateToken({id})

        res.status(200).send(token)
    } catch(error: any){
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
}