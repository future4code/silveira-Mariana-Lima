import { Request, Response } from "express";
import { getUserByEmail } from "../data/getUserByEmail";
import { GenerateToken, HashManager } from "../services/types";

export const login = async (req: Request, res: Response): Promise<any> => {
    try{
        const {email, password} = req.body;
        const user = await getUserByEmail(email);

        if(!email){
            res.status(406).send("The email input is missing")
        }else if (!user){
            res.status(404).send("User not found")
        }
        if(!password){
            res.status(406).send("The password input is missing")
        }

        let hashManager: HashManager = new HashManager();
        const comparePassword = hashManager.compareHash(password, user.password)

        if(!comparePassword){
            res.status(401).send("Incorrect password")
        }

        const token = GenerateToken(user.id)
        res.status(200).send({token})
    }catch(error:any){
        res.status(400).send(error.sqlMessage || error.message);
    }
}