import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    protected TABLE_NAME = "user_amaro";

    public async insertUser (user: User): Promise<void> {
        try{
            await this.connection(this.TABLE_NAME).insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getEmail(),
            })
        } catch (error: any) {
          throw new Error(error.sqlMessage || error.message);
        }
    };

    public async getUserByEmail(email: string): Promise<User | undefined> {
        try{
            const result = await this.connection(this.TABLE_NAME)
            .select("*")
            .where({email})
            return result[0]
        }catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };
}