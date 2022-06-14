import { Request, Response } from "express";
import { connection } from "../connection";

export async function getUserName(req: Request, res: Response): Promise<void> {
    try {
        const type = req.query.name as string;

        const response = await connection.raw(`
        SELECT * FROM aula49_exercicio WHERE type LIKE '%${type}%'
        `);

        res.send(response[0]);

    } catch (error:any) {
        res.send(error.message || error.sqlMessage)
    }
}