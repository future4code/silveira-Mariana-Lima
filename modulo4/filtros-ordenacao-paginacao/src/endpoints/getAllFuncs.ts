import { Request, Response } from "express";
import { connection } from "../connection";

export async function getAllFuncs(req: Request, res: Response): Promise<void> {
    try {
        let type = req.query.type as string;
        let page = Number(req.query.page);
        let size = 5
        let offset = size * (page - 1)
        if(!type){
            const response = await connection.raw(`
                SELECT * FROM aula49_exercicio LIMIT 5 OFFSET ${offset} ORDER BY id ASC`)
        
                res.send(response[0])
            }
    
            const response = await connection.raw(`
                SELECT * FROM aula49_exercicio WHERE type LIKE '%${type}%' ORDER BY id ASC LIMIT 5 OFFSET ${offset} 
            `)
    
            res.send(response[0])
        } catch (error:any) {
            res.send(error.message || error.sqlMessage)
        }
}