import { UpdateStatusDTO } from './../types/DTO/UpdateStatusDto';
import dogWalkingBusiness from './../business/DogWlkingBusiness';
import { DogWalkingInputDTO } from './../types/DTO/DogWalkingInputDTO';
import { Request, Response } from "express";

export class DogWalkingController {
    public async insert(req: Request, res: Response): Promise<void>{
        try{
            const {date, duration, latitude, longitude, start_time, end_time, pets} = req.body;
            const token = req.headers.authorization as string;
            const walk: DogWalkingInputDTO = {
                date,
                duration,
                latitude,
                longitude,
                pets,
                start_time,
                end_time,
                token
            };

            const result = await dogWalkingBusiness.insertWalking(walk)
            
            res.status(201).send({Message:"Walk sucessfully created"})
            
        }catch (error: any) {
            const { statusCode, message } = error;
            res.status(statusCode || 400).send({ message });
        }
    };

    public async getWalkDog(req: Request, res: Response): Promise<void> {
        try{
            const id = req.params.id
            const token = req.headers.authorization as string;
            const result = await dogWalkingBusiness.getWalk(id, token)

            res.status(200).send(result)
        }catch (error: any) {
            const { statusCode, message } = error;
            res.status(statusCode || 400).send({ message });
          }
    };

    public async updateStatus(req: Request, res: Response): Promise<void> {
        try{
            const {id, status} = req.body;
            const token = req.headers.authorization as string

            await dogWalkingBusiness.updateStatus(id, status, token);

            res.status(202).send({Message: "Walking Status updated."})
        }catch (error: any) {
            const { statusCode, message } = error;
            res.status(statusCode || 400).send({ message });
        }
    }
}