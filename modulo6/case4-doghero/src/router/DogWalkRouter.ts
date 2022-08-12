import { DogWalkingController } from './../controller/DogWalkController';
import express from "express";

export const DogWalkRouter = express.Router();

const dogWalkingController = new DogWalkingController();

DogWalkRouter.post("/createWalk", dogWalkingController.insert);
DogWalkRouter.get("/:id", dogWalkingController.getWalkDog);
DogWalkRouter.patch("/status", dogWalkingController.updateStatus)