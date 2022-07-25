import { UpdateStatus } from './../model/UpdateStatus';
import { Competition } from "../model/competition";
import BaseDatabase from "./BaseDatabase";
import { idText } from 'typescript';

export class CompetitionDatabase extends BaseDatabase {
    
    protected Table_Name: string = "competition";

    public createaCompetition = async(competition: Competition): Promise<void> => {
        try{
            await BaseDatabase.connection(this.Table_Name).insert({
                id: competition.getId,
                name: competition.getName,
                date: competition.getDate,
                status: competition.getStatus
            });
        }catch(error: any){
            throw new Error(error.sqlMessage || error.message)
        }
    };

    public updateStatusCompetition = async (input: UpdateStatus): Promise<void> => {
        try{
            const { id, status} = input;
            switch(status){
                case "close":
                    await BaseDatabase.connection(this.Table_Name)
                        .update("status", "close")
                        .where("id", id)
                break;
                case "open":
                    await BaseDatabase.connection(this.Table_Name)
                        .update("status", "open")
                        .where("id", id)
                break;
            }
        }catch(error: any){
            throw new Error(error.sqlMessage || error.message)
        }
    }
}