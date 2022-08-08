import { DogWalking } from './../model/DogWalking';
import { DogWalkingInputDTO } from './../types/DTO/DogWalkingInputDTO';
import { IdGenerator } from './../services/IdGenerator';
import { DogWalkingDatabase } from './../data/DogWalkingDatabase';
import { CustomError } from '../error/CustomError';
import moment from 'moment';
import { Pets } from '../model/Pets';
import { PetsTour } from '../model/PetsTour';

export class DogWalkingBusuness {
    constructor(
        private dogWalkingDatabase: DogWalkingDatabase,
        private idGenerator: IdGenerator
    ){}

    public async insertWalking(input: DogWalkingInputDTO) {
        try{
            const {date, latitude, longitude, start_time, end_time, pets, tutor} = input;

            if (!date) {
                throw new CustomError(422,"The date input is empty");
            };

            if (!latitude) {
                throw new CustomError(422,"The latitude input is empty");
            };

            if (!longitude) {
                throw new CustomError(422,"The longitude input is empty");
            };

            if (!start_time) {
                throw new CustomError(422,"The start date input is empty");
            };

            if (!end_time) {
                throw new CustomError(422,"The end date input is empty");
            };

            if (!pets) {
                throw new CustomError(422,"The pets input is empty");
            };

            if (!tutor) {
                throw new CustomError(422,"The tutor input is empty");
            };

            const id = this.idGenerator.generateId();
            const status = DogWalking.StatusRole('do')
            const duration = moment(end_time, "HH:mm:ss").diff(moment(start_time, "HH:mm:ss"))
            const durationMinutes = Math.round(moment.duration(duration).asMinutes())
        
            if(durationMinutes < 0){
                throw new CustomError(422, "The end time cannot be less than the start time.");
            }
        
            if(durationMinutes < 30 || durationMinutes > 60){
                throw new CustomError(422, "Please choose times of 30 or 60 minutes.");
            }
        
            if (durationMinutes <= 30){
                const price = 25 + ((input.pets.length - 1) * 15)

                const newWalk = new DogWalking(id, status, date, price, durationMinutes, latitude, longitude, start_time, end_time);

                await this.dogWalkingDatabase.insertWalking(newWalk);
            };

            if (durationMinutes > 30 && durationMinutes <=60){
                const price = 35 + ((input.pets.length - 1) * 20)
    
                const newWalk = new DogWalking (id, status, date, price, durationMinutes, latitude, longitude, start_time, end_time);
    
                await this.dogWalkingDatabase.insertWalking(newWalk)
            };

            for(let pet of input.pets){

            const verifyPet = await this.dogWalkingDatabase.getPetId(pet, input.tutor)
        
                if(!verifyPet){
                    const petId = this.idGenerator.generateId();
        
                    const newPet = new Pets(petId,pet,input.tutor);
        
                    await this.dogWalkingDatabase.insertPets(newPet);
        
                    const TourPetsId = this.idGenerator.generateId();
        
                    const tourPets = new PetsTour(TourPetsId, petId, id )
        
                    await this.dogWalkingDatabase.insertPetsTour(tourPets);

                } else if (verifyPet){
                        const tourPetsId = this.idGenerator.generateId()
        
                    const tourPets = new PetsTour(tourPetsId, verifyPet.id, id)
        
                    await this.dogWalkingDatabase.insertPetsTour(tourPets);
                }
            };
        }catch (error: any){
        throw new CustomError(error.statusCode, error.message)
        };
    };

    public async getWalkById(id: string){
        try{
            if(!id){
                throw new CustomError(422, "The id input is empty")
            };

            const walk = await this.dogWalkingDatabase.getTour(id);
            if(!walk){
                throw new CustomError(422, "Not found")
            };

            const pets = await this.dogWalkingDatabase.getPetById(id);
            const walkPets = []

            for(let pet of pets){
                const petName = await this.dogWalkingDatabase.getPetById(pet.pet_id)
                walkPets.push(petName.name)
            }
            const fullWalk = {
                ...walk,
                walkPets
            }
        }catch (error: any){
            throw new CustomError(error.statusCode, error.message)
        };
    }
};

export default new DogWalkingBusuness(
    new DogWalkingDatabase(),
    new IdGenerator()
);