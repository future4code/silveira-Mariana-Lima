import { Request, Response } from "express";
import { connection } from "../connection";
import { GetTokenData } from "../services/types";

export const getProfile = async (req: Request, res: Response): Promise<any> => {
    let erroCode: number = 400;
    try {
      const token: string = req.headers.authorization as string;
  
      if (!token) {
        erroCode = 401;
        throw new Error("Token is missing");
      }
  
      const tokenData = GetTokenData(token as string);
  
      if (!tokenData) {
        erroCode = 403;
        throw new Error("Incorrect Token");
      }
        const response = await connection("cookenu_user")
        .select("id", "name", "email")
        .where({ id: tokenData.id });

        res.status(200).send(response[0])
    }catch(error:any){
        res.status(400).send(error.sqlMessage || error.message)
    }
}