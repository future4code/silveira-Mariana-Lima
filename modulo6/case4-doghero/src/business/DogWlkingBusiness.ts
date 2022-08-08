import { DogWalking } from './../model/DogWalking';
import { DogWalkingInputDTO } from './../types/DTO/DogWalkingInputDTO';
import { IdGenerator } from './../services/IdGenerator';
import { DogWalkingDatabase } from './../data/DogWalkingDatabase';
import { CustomError } from '../error/CustomError';

export class DogWalkingBusuness {
    constructor(
        private dogWalkingDatabase: DogWalkingDatabase,
        private idGenerator: IdGenerator
    ){}

    public async insertWalking(input: DogWalkingInputDTO): Promise<any> {
        try{
            const {date, latitude, longitude, start_date, end_date } = input;

            if (!date) {
                throw new CustomError(422,"The date input is empty");
            };

            if (!latitude) {
                throw new CustomError(422,"The latitude input is empty");
            };

            if (!longitude) {
                throw new CustomError(422,"The longitude input is empty");
            };

            if (!start_date) {
                throw new CustomError(422,"The start date input is empty");
            };

            if (!end_date) {
                throw new CustomError(422,"The end date input is empty");
            };

            const id = this.idGenerator.generateId();
            const dogwalking = new DogWalking(id, "DO", date, price)
        }
    }
}