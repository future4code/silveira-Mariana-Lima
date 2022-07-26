import { UpdateStatus } from './../model/UpdateStatus';
import BaseDatabase from "./BaseDatabase";
import { Competition } from '../model/Competition';

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

    public getCompetitionById = async(id:string): Promise<Competition> => {
        try{
            const [result] = await BaseDatabase.connection(this.Table_Name)
            .where("id", id)
            return result;
        } catch(error: any){
            throw new Error( error.sqlMessage || error.message);
        }
    };

    public updateStatusCompetition = async (id: string, status: string): Promise<void> => {
        try{
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