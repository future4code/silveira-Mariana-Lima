import { PetResult } from './../types/PetResult';
import { DogWalkingResult } from '../types/DogWalkingResult';
import { Pets } from '../model/Pets';
import { PetsTour } from '../model/PetsTour';
import { DogWalking } from './../model/DogWalking';
import BaseDatabase from "./BaseDatabase";
import { TourResult } from '../types/TourResult';

export class DogWalkingDatabase extends BaseDatabase{

    protected TABLE_WALKING: string = "doghero_dogWalking";
    protected TABLE_PETS: string = "doghero_pets";
    protected TABLE_TOUR: string = "doghero_pets_tour";

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
                dbModel.end_date
            ));
    };

    public async insertWalking(walking: DogWalking): Promise<void>{
        try{
            await BaseDatabase.connection(this.TABLE_WALKING).insert({
                id: walking.getId(),
                status: walking.getStatus(),
                date: walking.getDate(),
                price: walking.getPrice(),
                latitude: walking.getLatitude(),
                longitude: walking.getLongitude(),
                duration: walking.getDuration(),
                start_time: walking.getStartTime(),
                end_time: walking.getEndTime()
            });
        }catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async insertPets(pet: Pets): Promise<void> {
        try{
            await BaseDatabase.connection(this.TABLE_PETS).insert({
                id: pet.getId(),
                name: pet.getName(),
                pet_walking: pet.getTutor()
            })
        }catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    };

    public async insertPetsTour(tour: PetsTour): Promise<void> {
        try{
            await BaseDatabase.connection(this.TABLE_TOUR).insert({
                id: tour.getId(),
                pet_id: tour.getPetId(),
                tour_id: tour.getTourId()
            })
        }catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    };

    public async getWalk():  Promise<DogWalkingResult[]> {
        try{
            const result = await BaseDatabase.connection(this.TABLE_WALKING)
                .select("*")

            return result

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    };

    public async getWalkById(id: string): Promise<DogWalkingResult> {
        try{
            const result = await BaseDatabase.connection(this.TABLE_WALKING)
                .select("*")
                .where("id", id)

            return result[0]
        }catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    };

    public async getTour(id: string): Promise<TourResult[]> {
        try{
            const result = await BaseDatabase.connection(this.TABLE_TOUR)
                .select("*")
                .where({"tour_id": id})

                return result[0]
        }catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    };

    public async getPetById(id: string): Promise<PetResult> {
        try{
            const result = await BaseDatabase.connection(this.TABLE_PETS)
            .select("*")
            .where("id", id)

            return result[0]
        }catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    };

    public async getPetId(name: string, tutor: string): Promise<PetResult> {
        try {
            const result = await BaseDatabase.connection(this.TABLE_PETS)
            .select("*")
            .where("name", name)
            .andWhere("tutor", tutor)
            return result[0]
        } catch (error) {
            throw new Error("Erro ao buscar pet no banco.")
        }
    };

    public async startTime(id: string, startTime: string): Promise<DogWalkingResult> {
        try {
            const result = await BaseDatabase.connection(this.TABLE_WALKING)
                .update({start_time: startTime, status: "DO"})
                .where("id",id)

            const updatedWalk = await BaseDatabase.connection(this.TABLE_WALKING)
                .select("*")
                .where("id",id)

            return updatedWalk[0]

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };

    public async finishWalking (id: string, finishTime: string, newPrice: number, duration: string): Promise<DogWalkingResult> {
        try {
            const result = await BaseDatabase.connection(this.TABLE_WALKING)
                .update({status: "DONE", price: newPrice, duration: duration, end_time: finishTime})
                .where("id", id)

            const updatedWalk = await BaseDatabase.connection(this.TABLE_WALKING)
                .select("*")
                .where("id", id)

            return updatedWalk[0]

        }catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };
};

