import { Request, Response } from "express";
import { connection } from "./connection";

export const getUserById = async(id: string): Promise<any> => {
    const response = await connection("User")
    .where({id: id})
    return response[0]
}