import dogWalkingBusiness from './../business/DogWlkingBusiness';
import { DogWalkingInputDTO } from './../types/DTO/DogWalkingInputDTO';
import { Request, Response } from "express";

export class DogWalkingController {
    public async insert(req: Request, res: Response): Promise<void>{
        try{
            const {date, duration, latitude, longitude, start_time, end_time, pets} = req.body;
            const walk: DogWalkingInputDTO = {
                date,
                duration,
                latitude,
                longitude,
                pets,
                start_time,
                end_time
            };

            const result = await dogWalkingBusiness.insertWalking(walk)
            
            res.status(201).send({Message:"Walk sucessfully created", result})
            
        }catch (error: any) {
            const { statusCode, message } = error;
            res.status(statusCode || 400).send({ message });
        }
    };

    public async getWalkDog(req: Request, res: Response): Promise<void> {
        try{
            const id = req.params.id
            const result = await dogWalkingBusiness.getWalk(id)

            res.status(200).send(result)
        }catch (error: any) {
            const { statusCode, message } = error;
            res.status(statusCode || 400).send({ message });
          }
    };
}