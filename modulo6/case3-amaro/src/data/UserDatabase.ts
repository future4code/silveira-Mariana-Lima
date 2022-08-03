import { User } from "../model/User";
import BaseDatabase from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    protected TABLE_NAME: string = "user_amaro";

    private toModel(dbModel?: any): User | undefined {
        return (
            dbModel &&
            new User(
               dbModel.id,
               dbModel.name,
               dbModel.email,
               dbModel.password,
            ));
    };

   public async insertUser(user: User): Promise<void> {
        try{
            await BaseDatabase.connection(this.TABLE_NAME).insert({
                id: user.getId(), 
                name: user.getName(), 
                email: user.getEmail(),
                password: user.getPassword()
            });    
        }catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    };

    public async selectUserByEmail(email: string) {
        try{
            const result = await BaseDatabase.connection(this.TABLE_NAME)
                .select("*")
                .where({ email });
            return this.toModel(result[0])
        } catch(error: any){
            throw new Error(error.sqlMessage || error.message)
        }
    };
} 