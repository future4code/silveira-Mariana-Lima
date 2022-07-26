import { Request, Response } from "express";
import { ResultBusiness } from "../business/ResultBusiness";

export class ResultController{
    constructor(
        private resultBusiness: ResultBusiness
    ){}

    public  registerResult = async(req: Request, res: Response): Promise<void> => {
        try {
            const { competition, athlete, value, unit  } = req.body;
            const result = await this.resultBusiness.registerResult(
                competition,
                athlete,
                value,
                unit
            );
            
            res.status(201).send({message: "Result successfully created", result});
        
        }catch(error: any) {
            const {statusCode, message } = error
            res.status( statusCode || 400).send(error.sqlMessage || {message});
        }  
    };
}