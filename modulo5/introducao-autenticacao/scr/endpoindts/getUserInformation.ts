import { Authentication } from './../types';
import { Request, Response } from "express";
import { getData } from "..";
import { connection } from "../data/connection";
import { getUserById } from "../data/getUserById";
import { User } from "../types";

export const getUserInformation = async(req: Request, res: Response): Promise<any> => {
    let erroCode = 400
    try{
        const token = req.headers.authorization as string
        const Authentication = getData(token)
        const user = await getUserById(Authentication.id)
        let result = {
            id: user.id,
            email: user.email
        }
        res.send(result)
    }catch(error:any){
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
}
