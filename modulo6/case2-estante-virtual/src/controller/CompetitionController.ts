import { Request, Response } from "express";
import { CompetitionDTO } from "../types/DTO/CompetitionDTO";
import { UpdateStatusDTO } from "../types/DTO/UpdateStatusDTO";
import competitionBusiness from "../business/CompetitionBussines";


export class CompetitionController {
  
  public async register(req: Request, res: Response): Promise<void> {
    try {
      const { name, date} = req.body;
      const competitionInput: CompetitionDTO = {
        name: name,
        date: date,
      };

      await competitionBusiness.register(competitionInput)

      res.status(201).send({ message: "Competition created."});
    } catch (error: any) {
      const { statusCode, message } = error;
      res.status(statusCode || 400).send({ message });
    }
  };

  public async updateStatus (req: Request,res: Response): Promise<void> {
    try {
      const { id, status } = req.body;
      const updateCompetitionInput: UpdateStatusDTO = {
        id,
        status,
      };

      await competitionBusiness.updateStatus(updateCompetitionInput);

      res.status(202).send({ message: "Competition status updated."});
    } catch (error: any) {
      const { statusCode, message } = error;
      res.status(statusCode || 400).send({ message });
    }
  };
}