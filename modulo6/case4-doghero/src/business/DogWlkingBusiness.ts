import { UpdateStatusDTO } from './../types/DTO/UpdateStatusDto';
import { Authenticator } from './../services/Authenticator';
import { DogWalking, PriceCalculator } from './../model/DogWalking';
import { DogWalkingInputDTO } from './../types/DTO/DogWalkingInputDTO';
import { IdGenerator } from './../services/IdGenerator';
import { DogWalkingDatabase } from './../data/DogWalkingDatabase';
import { CustomError } from '../error/CustomError';

export class DogWalkingBusiness {
    constructor(
        private dogWalkingDatabase: DogWalkingDatabase,
        private idGenerator: IdGenerator
    ){}

    public async insertWalking(input: DogWalkingInputDTO) {
        try{
            const {date, duration, latitude, longitude, start_time, end_time, pets, token} = input;

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

            if(!token) {
                throw new Error("Verify you authorization")
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

    public async getWalk(id:string, token: string) {
        try{
            if(!id){
                throw new CustomError(422, "Invalid Parameter");
            };

            if(!token) {
                throw new Error("Verify you authorization")
            };

            const result = await this.dogWalkingDatabase.getWalkById(id);

            return result

        
        } catch (error: any){
            throw new CustomError(error.statusCode, error.message)
        };
    };

    public async updateStatus(id: string, status: string, token: string): Promise<void> {
        try{

            if (!id || !status){
                throw new CustomError(422, "Please fill in all fields.");
            };

            if(!token) {
                throw new Error("Verify you authorization")
            };

            const foundWalk = await this.dogWalkingDatabase.getWalkById(id);

            if(!foundWalk) {
                throw new CustomError(404, "Walking not found");
            };

            const updateStatusInput: UpdateStatusDTO = {
                id, status, token
            };

            if(status.toLowerCase() !== "Do" && status.toLowerCase() !== "Doing" && status.toLowerCase() !== "Done"){
                throw new CustomError(422,"Please insert 'Do' or 'Doing' or 'Done'.");
            };

            await this.dogWalkingDatabase.updateStatus(updateStatusInput);
        
        }catch (error: any){
            throw new CustomError(error.statusCode, error.message)
        };
    }
};

export default new DogWalkingBusiness(
    new DogWalkingDatabase(),
    new IdGenerator()
)