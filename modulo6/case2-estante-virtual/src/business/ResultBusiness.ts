import { IdGenerator } from './../services/IdGenerator';
import { CompetitionDatabase } from '../data/CompetitionDatabase';
import { ResultDatabase } from './../data/ResultDatabase';
import { Result } from '../model/result';
import { CustomError } from '../error/CustomError';
import { Competition } from '../model/competition';

export class ResultBusiness{
    constructor(
        private resultDatabase: ResultDatabase,
        private competitionDatabase: CompetitionDatabase,
        private idGenerator: IdGenerator
    ){}

    public registerResult = async(competition: string, athlete: string, value: number, unit: string): Promise<void> => {
        try{
            if(!competition){
                throw new CustomError(422, "The competition input is empty");
            };

            if(!athlete){
                throw new CustomError(422, "The athlete input is empty");
            };

            if(!value){
                throw new CustomError(422, "The value in result input is empty");
            };

            if (unit.toLowerCase() !== "s" && unit.toLowerCase() !== "m") {
                throw new CustomError(422, "Please use 's' for seconds or 'm' for meters.");
            };

            const getCompetition: Competition[] = await this.competitionDatabase.getCompetitionByName(competition);
            if(!getCompetition){
                throw new CustomError(404, "Competition not found");
            };

            const getStatus = await this.competitionDatabase.getStatusCompetition(competition);
            if(!getStatus){
                throw new CustomError(422, "This competition isn't active.");
            };

            const id = this.idGenerator.generateId();
            const result = new Result( id, competition, athlete, value, unit);
            await this.resultDatabase.registerResult(result);

        }catch(error:any){
            throw new CustomError(error.statusCode, error.message);
        }
    };
}