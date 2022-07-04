import { Request, Response } from "express";
import { UserBussines } from "../business/UserBusiness";

const userBussines = new UserBussines()

export class UserController {
    singup = async(req: Request, res: Response) => {
        try{
            const {name, email, password, role} = req.body
            const response = await userBussines.signup(name, email, password, role)
            res.status(201).send("Created User")
        }catch (error:any){
            res.status(400).send(error.sqlMessage || error.message)
        }
    }

    login = async (req: Request, res: Response) => {
        try{
            const {email, password} = req.body
            const response = await userBussines.login(email, password)
            res.status(200).send(response)
        }catch (error:any){
            res.status(400).send(error.sqlMessage || error.message)
        }
    }

    getUsers = async(req: Request, res: Response) =>{
        try{ 
            const token = req.headers.authorization as string
            const response = await userBussines.getUsers(token)
            res.send(response)
        }catch (error:any){
            res.status(400).send(error.sqlMessage || error.message)
        }
    }

    deleteUser = async(req: Request, res: Response) => {
        try{
            const token = req.headers.authorization as string
            const id = req.params.id
            const response = await userBussines.deleteUser(token, id)
            res.send("The user was deleted")
        }catch (error:any){
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
}