import { Request, Response } from "express";
import { generateToken } from "..";
import { getUserByEmail } from "../data/getUserByEmail";

export const Login = async(req: Request, res: Response): Promise<any> => {
    let erroCode = 400
    try{
        const {email, password} = req.body
        if(!email || email.indexof("@") === -1){
            erroCode = 422
            throw new Error("Invalid email")
        }
        const user = await getUserByEmail(email)

        if(user.password !== password){
            erroCode = 422
            throw new Error("Invalid password");
        }
        const token = generateToken({id: user.id})
        res.send(token)
    }catch(error: any){
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
}