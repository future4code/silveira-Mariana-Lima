import { User } from "../models/User";
import BaseDatabase from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {

    protected tableName: string = "user_wirecard";

    private toModel(dbModel?: any): User | undefined {
        return (
            dbModel &&
            new User(
               dbModel.id,
               dbModel.name,
               dbModel.email,
               dbModel.cpf,
               dbModel.password,
            ));
    };

   public async insertUser(user: User): Promise<void> {
    try{
        await BaseDatabase.connection.raw(`
            INSERT INTO ${this.tableName} (id, name, email, cpf, password)
            VALUES (
            '${user.getId()}', 
            '${user.getName()}', 
            '${user.getEmail()}',
            '${user.getCpf()}',
            '${user.getPassword()}'
            )`)
    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message)
      }
    }

    public async selectUserByEmail(email: string):Promise<User | undefined> {
        try{
            const result = await BaseDatabase.connection.raw(`
                SELECT * from ${this.tableName} WHERE email = '${email}'
            `);
            return this.toModel(result[0][0])
        } catch(error: any){
            throw new Error(error.sqlMessage || error.message)
        }
    }
}