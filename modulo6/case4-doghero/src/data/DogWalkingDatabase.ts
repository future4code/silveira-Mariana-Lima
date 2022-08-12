import { UpdateStatusDTO } from './../types/DTO/UpdateStatusDto';
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

    public async updateStatus(input: UpdateStatusDTO): Promise<void>{
        try{
            const {id, status} = input; 
            switch (status) {
                case "do":
                    await BaseDatabase.connection(this.TABLE_NAME)
                        .update("staus", "do")
                        .where("id", id);
                break;
                case "DO":
                    await BaseDatabase.connection(this.TABLE_NAME)
                        .update("staus", "DO")
                        .where("id", id);
                break;
                case "Do":
                    await BaseDatabase.connection(this.TABLE_NAME)
                        .update("staus", "Do")
                        .where("id", id);
                break;
                case "doing":
                    await BaseDatabase.connection(this.TABLE_NAME)
                        .update("status", "doing")
                        .where("id", id)
                break;
                case "DOING":
                    await BaseDatabase.connection(this.TABLE_NAME)
                        .update("status", "DOING")
                        .where("id", id)
                break;
                case "Doing":
                    await BaseDatabase.connection(this.TABLE_NAME)
                        .update("status", "Doing")
                        .where("id", id)
                break;
                case "done":
                    await BaseDatabase.connection(this.TABLE_NAME)
                        .update("status", "done")
                        .where("id", id)
                break;
                case "DONE":
                    await BaseDatabase.connection(this.TABLE_NAME)
                        .update("status",  "DONE")
                        .where("id", id)
                break;
                case "Done":
                    await BaseDatabase.connection(this.TABLE_NAME)
                        .update("status", "Done")
                        .where("id", id)
                break;
            }
        } catch(error: any){
            throw new Error(error.sqlMessage || error.message);
        }
    };
};

