import { Request, Response } from "express";
import { CompetitionBusiness } from "../business/CompetitionBussines";

export class CompetitionController {
    constructor(
        private competitionBusiness: CompetitionBusiness
    ){}

    public createCompetition = async(req: Request, res: Response): Promise<void> => {
        try {
            const { name, date } = req.body;
            const result = await this.competitionBusiness.createCompetition(
                name,
                date,
            );
            
            res.status(201).send({message: "Competition successfully created", result});
        
        }catch(error: any) {
            const {statusCode, message } = error
            res.status( statusCode || 400).send(error.sqlMessage || {message});
        }  
    };

    public updateStatusCompetititon = async(req: Request, res: Response): Promise<void> => {
        try{
            const { id, status } = req.body;
            const result = await this.competitionBusiness.updateStatusCompetititon(
                id,
                status
            );

            res.status(202).send({message: "Competition status update", result})
        
        }catch(error: any) {
            const {statusCode, message } = error
            res.status( statusCode || 400).send(error.sqlMessage || {message});
        }
    }
}