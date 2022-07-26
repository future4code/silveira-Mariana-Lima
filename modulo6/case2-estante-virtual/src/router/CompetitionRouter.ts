import { CompetitionController } from './../controller/CompetitionController';
import express from 'express';
import { CompetitionBusiness } from '../business/CompetitionBussines';
import { CompetitionDatabase } from '../data/CompetitionDatabase';
import { IdGenerator } from '../services/IdGenerator';

export const CompetitionRouter = express.Router();

const competitionController = new CompetitionController(
    new CompetitionBusiness(
        new CompetitionDatabase(), new IdGenerator()
));

CompetitionRouter.post("/create", competitionController.createCompetition);
CompetitionRouter.patch("/status", competitionController.updateStatusCompetititon);