import { CompetitionDatabase } from "../data/CompetitionDatabase";
import { CustomError } from "../error/CustomError";
import { Competition } from "../model/Competition";
import { IdGenerator } from "../services/IdGenerator";

export class competitionBusiness{

    constructor(
        private competitionDatabase: CompetitionDatabase,
        private idGenerator: IdGenerator
    ){}

    public createCompetition = async(name: string, date: string, status: string): Promise<void> => {
        try{
            if(!name){
                throw new CustomError(422, "The name input is empty");
            };

            if(!date){
                throw new CustomError(422, "The date input is empty");
            };

            if(!status){
                throw new CustomError(422, "The status input is empty");
            };

            const id = this.idGenerator.generateId();
            const competition = new Competition(id, name, date, "Open");
            await this.competitionDatabase.createaCompetition(competition);
        }catch(error: any) {
            throw new CustomError(error.statusCode, error.message);
        };
    };

    public updateStatusCompetititon = async( id: string, status: string): Promise<void> => {
        try{
            if(!status){
                throw new CustomError(422, "The status input is empty");
            };

            const getCompetition = await this.competitionDatabase.getCompetitionById(id);

            if(!getCompetition) {
                throw new CustomError(404, "Competition not found");
            }

            await this.competitionDatabase.updateStatusCompetition(status)
        }catch(error: any) {
            throw new CustomError(error.statusCode, error.message);
        };
    }
}