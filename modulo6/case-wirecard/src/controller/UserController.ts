import { Request, Response } from 'express';
import userBussiness from './../bussiness/UserBussiness';

export class UserController {

    public async signup(req: Request, res: Response){
        try {
            const { name, email, cpf, password } = req.body;
            const result = await userBussiness.singup(
                name, 
                email, 
                cpf, 
                password
            );

            res.status(201).send("User successfully created");
        } catch(error: any) {
            const {statusCode, message } = error
            res.status( statusCode || 400).send(error.sqlMessage || {message});
        }   
    }

    public async login(req: Request, res: Response){
        try {
            const { email, password } = req.body
            const response = await userBussiness.login(email, password)
            res.status(200).send(`Token: ${response}`)
        } catch(error: any) {
            const {statusCode, message } = error
            res.status( statusCode || 400).send(error.sqlMessage || {message});
        }   
    }
}