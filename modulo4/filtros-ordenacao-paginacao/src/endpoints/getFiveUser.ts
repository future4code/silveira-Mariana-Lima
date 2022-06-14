import {Request, Response} from 'express';
import {connection} from '../connection';

export async function getFiveUser(req: Request, res: Response): Promise<void> {
    let erroCode = 400

    try {
        let page = Number(req.query.page)
        let offset = 5 * (page - 1)

        const response = await connection.raw(`
            SELECT * FROM aula49_exercicio LIMIT 5 OFFSET ${offset}
        `)

        res.send(response[0])
    } catch (error:any) {
        res.status(erroCode).send(error.message || error.sqlMessage)
    }
}