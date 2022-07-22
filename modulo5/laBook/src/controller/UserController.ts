import { Request, Response } from "express";
import { UserBussines } from "../business/UserBusiness";

const userBussines = new UserBussines()

export class UserController {
    signup = async(req: Request, res: Response) => {
        try{
            const {name, email, password} = req.body
            const response = await userBussines.signup(name, email, password)
            res.status(201).send("Created User")
        }catch(error:any){console.log(error)
            res.status(400).send(error.sqlMessage || error.message)
        }
    }

    login = async(req: Request, res: Response) => {
        try{
            const {email, password} = req.body
            const response = await userBussines.login(email,password)
            res.status(200).send(response)
        }catch(error:any){
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
}