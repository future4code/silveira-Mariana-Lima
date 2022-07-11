import { BaseDatabase } from './BaseDatabase';
import { User } from "../types/User";

export class UserDatabase extends BaseDatabase{
    insertUser = async(user: User) => {
        await this.connection("User_Arq")
        .insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role
        })
    }

    selectUserbyEmail = async(email: string) => {
        try{
            const result = await this.connection("User_Arq")
            .select("*")
            .where({email: email})
            return{
                id: result[0].id,
                name: result[0].name,
                email: result[0].email,
                password: result[0].password,
                role: result[0].role,
            }
        }catch (error:any){
            throw new Error(error.sqlMessage || error.message)
        }
    }

    selectUserById = async(id:string) => {
        try{
            const result = await this.connection("User_Arq")
            .select("*")
            .where({ìd: id})
            return{
                id: result[0].id,
                name: result[0].name,
                email: result[0].email,
                password: result[0].password,
                role: result[0].role,
            }
        }catch (error:any){
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getUsers = async() => {
        try{
            const response: User = await this.connection("User_Arq")
            .select("id", "name", "email", "role")
            return response
        }catch (error:any){
            throw new Error("Error in get user")
        }
    }

    deleteUser = async(id: string) => {
        try{
            const response = await this.connection("User_Arq")
            .delete()
            .where({id: id})
        }catch (error:any){
            throw new Error("Error in delet user")
        }
    }
}