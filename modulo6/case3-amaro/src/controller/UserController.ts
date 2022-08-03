import { LoginInputDTO } from './../types/DTO/LoginInputDTO';
import { UserInputDTO } from './../types/DTO/UserInputDTO';
import { Request, Response } from 'express';
import userBusiness from './../business/UserBusiness';

export class UserController {

    public async signup(req: Request, res: Response) {
        const { name, email, password } = req.body;
        const input: UserInputDTO = {name, email, password};

        try{
            const result = await userBusiness.signup(input);

            res.status(201).send({ mesage: "User successfully created", token: result});

        } catch(error: any) {
            const {statusCode, message } = error
            res.status( statusCode || 400).send(error.sqlMessage || {message});
        }   
    };

    public async login(req: Request, res: Response){
        try {
            const { email, password } = req.body;
            const input: LoginInputDTO = { email, password};
            const response = await userBusiness.login(input);

            res.status(200).send(`Token: ${response}`);

        } catch(error: any) {
            const {statusCode, message } = error
            res.status( statusCode || 400).send(error.sqlMessage || {message});
        }   
    };
} 