import { ProductInputDTO } from './../types/DTO/ProductInputDTO';
import { Request, Response } from "express";
import productBusiness from "../business/ProductBusinnes";


export class ProductController {
    
    insertProduct = async(req: Request, res: Response) => {
        const { name, tags } = req.body;
        const token = req.headers.authorization as any;
        const input: ProductInputDTO = { name, tags, token};

        try {
            
            const response = await productBusiness.insertProduct(input);

            res.send("The product was successfully created");

        } catch (error: any) {
            const { statusCode, message } = error;
            res.status(statusCode || 400).send({ message });
          }
    };

    getProduct = async (req: Request, res: Response) => {
        try {
            const {search} = req.params as any;
            const token = req.headers.authorization as string;
            const response = await productBusiness.getProduct(search, token);

            res.status(200).send(response);

        } catch (error: any) {
            const { statusCode, message } = error;
            res.status(statusCode || 400).send({ message });
        }
    };
} 