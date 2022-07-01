import { Request, Response } from "express";
import { connection } from "../connection";

export const getRecipe = async(req: Request, res: Response): Promise<any> => {
    try{
        const token = req.headers.authorization as string
        if(!token){
            res.status(401).send("Token is missing")
        }

        const response = await connection("cookenu_recipes")
        .select("id", "title", "description", "creation")
        .where({ id: req.params.id})
        res.status(200).send(response[0])
    } catch(error:any){
        res.status(400).send( error.sqlMessage || error.message)
    }
}