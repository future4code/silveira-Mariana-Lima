import { Request, Response } from "express";
import { connection } from "../connection";

export async function getUserType(req: Request, res: Response): Promise<void> {
    let erroCode = 400
    
    try {

        const type = req.query.type as string
        if(!type){
        const response = await connection.raw(`
            SELECT * FROM aula49_exercicio WHERE type LIKE '%${type}%' ORDER BY name ASC
            `)

        if(!response.length) {
            erroCode = 404
            throw new Error("Employee not found")
        }

        res.send(response[0])   
        }
        const response = await connection.raw(`
            SELECT * FROM aula49_exercicio WHERE name LIKE '%${type}%' ORDER BY email ASC
            `)

        if(!response.length) {
            erroCode = 404
            throw new Error("Employee not found")
        }

    } catch (error:any) {
        res.status(erroCode).send(error.message || error.sqlMessage)
    }
}