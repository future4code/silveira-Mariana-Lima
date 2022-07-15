import { Request, Response } from "express";
import { connection } from "../connection";
import { FollowSystem, GetTokenData } from "../services/types";
import { generateId } from "../services/uuid";

export const followUser = async (req: Request, res: Response): Promise<any> => {
    try{
        const {userFollow} = req.body;
        const token = req.headers.authorization as string
        const id = generateId()
        if(!token){
            res.status(401).send("Token is missing")
        }
        if(!userFollow){
            res.status(401).send("UserId input is missing")
        }

        const tokenData = GetTokenData(token)
        if(!tokenData){
            res.status(403).send("Invalid token")
        }

        const response: FollowSystem = await connection("cookenu_friends")
        .insert({
            id:id,
            user_id: tokenData?.id,
            user_follow: userFollow
        })
        res.status(200).send("Following user")
    }catch(error:any){
        res.status(400).send(error.sqlMessage || error.message)
    }
}