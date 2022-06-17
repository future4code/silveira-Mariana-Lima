import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getAllProducts (req: Request, res: Response): Promise<any> {
    try {
        const products = await connection("labecommerce_products")
        .select();

        res.status(200).send(products);
    }catch(error: any){
        res.status(400).send(error.message || error.sqlMessage);
    }
}