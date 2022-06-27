import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getAllUsers(req: Request, res: Response): Promise<any> {
    let erroCode: number = 400;

    try {
        const getAllUsers = await connection("labecommerce_users")
        .select()

        res.status(200).json(getAllUsers);
    } catch (error: any) {
        res.status(erroCode).send(error.message || error.sqlMessage);
    }
}