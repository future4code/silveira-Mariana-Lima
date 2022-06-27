import { Request, Response } from "express";
import { connection } from "../data/connection";
import { getAllProducts } from "./getAllProducts";

export async function purchaseRecord (req: Request, res: Response): Promise<any> {
    let erroCode: number = 400;

    try{
        const {user_id, product_id, quantity} = req.body;

        let total_price = 0;

        const products = await getAllProducts();

        const productId = products.find((item: {id: any;}) => {
            return item.id === product_id;
        })

        if(!productId){
            erroCode = 404;
            throw new Error("the id input is empty");
        }

        let totalPrice = productId.price * quantity;

        await connection("labecommerce_purchases")
        .insert({
            id: Date.now() + Math.random().toString(),
            user_id: user_id,
            product_id: product_id,
            quantity: quantity,
            total_price: totalPrice
        })

        res.status(200).send({message: "Successfully Purchase"});
    } catch (error: any) {
        res.status(erroCode).send({message: error.message || error.sqlMessage});
    }
}