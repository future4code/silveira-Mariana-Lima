import { DogWalking, PriceCalculator } from './../model/DogWalking';
import { DogWalkingInputDTO } from './../types/DTO/DogWalkingInputDTO';
import { IdGenerator } from './../services/IdGenerator';
import { DogWalkingDatabase } from './../data/DogWalkingDatabase';
import { CustomError } from '../error/CustomError';
import { deflate } from 'zlib';

export class DogWalkingBusiness {
    constructor(
        private dogWalkingDatabase: DogWalkingDatabase,
        private idGenerator: IdGenerator
    ){}

    public async insertWalking(input: DogWalkingInputDTO) {
        try{
            const {date, duration, latitude, longitude, start_time, end_time, pets} = input;

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

            const id = this.idGenerator.generateId();
            const status = "Do"
            const price = PriceCalculator(duration, pets)
                    
            

                const newWalk = new DogWalking(id, status, date, price, duration, latitude, longitude, start_time, end_time, pets);

                await this.dogWalkingDatabase.insertWalking(newWalk);
            
        }catch (error: any){
        throw new CustomError(error.statusCode, error.message)
        };
    };

    public async getWalk(id:string) {
        try{
            if(!id){
                throw new CustomError(422, "Invalid Parameter");
            };

            const result = await this.dogWalkingDatabase.getWalkById(id);

            return result

        
        } catch (error: any){
            throw new CustomError(error.statusCode, error.message)
        };
    };
};

export default new DogWalkingBusiness(
    new DogWalkingDatabase(),
    new IdGenerator()
)

