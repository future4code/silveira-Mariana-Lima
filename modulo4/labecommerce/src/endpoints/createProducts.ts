import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function createProducts (req: Request, res: Response): Promise<any> {
    let erroCode = 400;

    try {
        const {name, price, image_url} = req.body;

        if(!name){
            erroCode = 404;
            throw new Error("The name input is empty");
        }
        if(!price || price.length === 0){
            erroCode = 404;
            throw new Error("The price input is empty" || "Price greater than 0");
        }
        if(!image_url){
            erroCode = 404;
            throw new Error("The image_url input is empty");
        }

        await connection("labecommerce_products")
        .insert({
            id: Date.now() + Math.random().toString(),
            name,
            price,
            image_url
        })

        res.status(201).send({message: "Product created successfully"});

    }catch(error: any){
        res.status(erroCode).send(error.message || error.sqlMessage);
    }
}