import { Pets } from '../model/Pets';
import { DogWalking } from './../model/DogWalking';
import BaseDatabase from "./BaseDatabase";

export class PetsDatabase extends BaseDatabase{

    protected TABLE_NAME: string = "pets_doghero";

    private toModel(dbModel?: any): Pets | undefined {
        return(
            dbModel && new Pets(
                dbModel.id,
                dbModel.pet_name,
                dbModel.pet_walk_id
            ));
    };

    public async insertPet(pet:Pets): Promise<void>{
        try{
            await BaseDatabase.connection(this.TABLE_NAME).insert({
                id: pet.getId(),
                pet_name: pet.getPetName(),
                pet_walk_id: pet.getPetWalkId()
            });
        }catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    };

    public async getPetById(id: string): Promise<Pets | undefined> {
        try{
            const result = await BaseDatabase.connection(this.TABLE_NAME)
                .select("*")
                .where("id", id)

                return this.toModel(result[0][0]);
        }catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}