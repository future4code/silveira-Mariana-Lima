import { DogWalking } from "../model/DogWalking";
import BaseDatabase from "./BaseDatabase";

export class DogWalkingDatabase extends BaseDatabase{

    protected TABLE_NAME: string = "doghero_dogWalking";

    private toModel(dbModel?: any): DogWalking | undefined {
        return(
            dbModel && new DogWalking(
                dbModel.id,
                dbModel.status,
                dbModel.date,
                dbModel.price,
                dbModel.latitude,
                dbModel.longitude,
                dbModel.duration,
                dbModel.start_date,
                dbModel.end_date,
                dbModel.pets
            ));
    };

    public async insertWalking(walking: DogWalking): Promise<void>{
        try{
            await BaseDatabase.connection(this.TABLE_NAME).insert({
                id: walking.getId(),
                status: walking.getStatus(),
                date: walking.getDate(),
                price: walking.getPrice(),
                latitude: walking.getLatitude(),
                longitude: walking.getLongitude(),
                duration: walking.getDuration(),
                start_time: walking.getStartTime(),
                end_time: walking.getEndTime(),
                pets: walking.getPets()
            });
        }catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    };


    public async getWalkById(id: string) {
        try{
            const result = await BaseDatabase.connection(this.TABLE_NAME)
                .select("status", "pets", "duration", "price")
                .where("id", id)

            return result
        }catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    };
};

