import { Request, Response } from "express";
import { connection } from "../connection";
import { GetTokenData } from "../services/types";

export const getUserProfile = async(req: Request, res: Response): Promise<any> => {
    try {
        const token = req.headers.authorization as string

        if(!token){
            res.status(401).send("Wrong token")
        }

        const tokenData = GetTokenData(token)
        if(!tokenData){
            res.status(403).send("Incorrect Token")
        }

        const response = await connection("cookenu_user")
        .select("id", "name", "email")
        .where({id: req.params.id})

        res.status(200).status(response[0])
    }catch(error: any){
        res.status(400).send(error.slqMessage || error.message)
    }
}