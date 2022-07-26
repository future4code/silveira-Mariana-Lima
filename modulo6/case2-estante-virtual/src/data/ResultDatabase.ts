import { Result } from "../model/result";
import BaseDatabase from "./BaseDatabase";

export class ResultDatabase extends BaseDatabase {

    protected Table_Name: string = "result";

    public registerResult = async(result: Result): Promise<void> => {
        try{
            await BaseDatabase.connection(this.Table_Name).insert({
                id: result.getId,
                competition: result.getCompettiton,
                athlete: result.getAthlete,
                value: result.getValue,
                unit: result.getUnit
            })
        }catch(error: any){
            throw new Error(error.sqlMessage || error.message)
        }
    };
}
