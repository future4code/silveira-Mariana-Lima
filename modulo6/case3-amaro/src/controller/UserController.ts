import { LoginIpuntDTO } from './../types/DTO/LoginInputDTO';
import userBusiness  from './../business/UserBusiness';
import { Request, Response } from "express";
import { UserInputDTO } from "../types/DTO/UserInputDTO";

export class UserController {

    public async signup(req: Request, res: Response) {
        const { name, email, password } = req.body;
        const input: UserInputDTO = {name, email, password};

        try{
            const result = await userBusiness.signup(input);
            
            res.status(201).send("User successfully created");

        } catch(error: any) {
            const {statusCode, message } = error
            res.status( statusCode || 400).send(error.sqlMessage || {message});
        }   
    };

    public async login(req: Request, res: Response) {
        const { email, password } = req.body;
        const input: LoginIpuntDTO = { email, password };

        try{
            const result = await userBusiness.login(input);

            res.status(200).send(`Token: ${result}`)
        }catch(error: any) {
            const {statusCode, message } = error
            res.status( statusCode || 400).send(error.sqlMessage || {message});
        }  
    };
}