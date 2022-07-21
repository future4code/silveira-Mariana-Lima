import express from "express";
import { CardController } from "../../controller/CardController";


export const cardRouter = express.Router();

const cardController = new CardController();

cardRouter.post("/createCard", cardController.insertCard);