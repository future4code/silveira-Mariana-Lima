import express from "express";
import { UserController } from "../controller/UserController";

export const UserRouter = express.Router();

const userController = new UserController();

UserRouter.post("/signup", userController.signup);
UserRouter.post("/login", userController.login);