import express from "express";
import { ResultBusiness } from "../business/ResultBusiness";
import { ResultController } from "../controller/ResultController";
import { CompetitionDatabase } from "../data/CompetitionDatabase";
import { ResultDatabase } from "../data/ResultDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const ResultRouter = express.Router();

const resultController = new ResultController(
    new ResultBusiness(
        new ResultDatabase(),new CompetitionDatabase(), new IdGenerator()
    )
);

ResultRouter.post("/register", resultController.registerResult)