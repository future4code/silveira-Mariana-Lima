import { BaseDatabase } from "./BaseDatabase";
import { Post, User } from "../types/Types";

export class UserDatabase extends BaseDatabase {
    insertUser = async(user: User) => {
        await this.connection("Labook_users")
        .insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        })
    };

    selectUserbyEmail = async(email: string) => {
        try{
            const result = await this.connection("Labook_users")
            .select("*")
            .where({email: email})
            return{
                id: result[0].id,
                name: result[0].name,
                email: result[0].email,
                password: result[0].password
            }
        }catch(error:any){
            throw new Error(error.sqlMessage || error.message)
        }
    };

    insertPost = async(post: Post) => {
        await this.connection("Labook_posts")
        .insert({
            id: post.id,
            photo: post.photo,
            description: post.description,
            type: post.type,
            createAt: post.createAt,
            authorId: post.authorId
        })
    };

    selectPostById = async(id: string) => {
        try{
            const result = await this.connection("Labook_posts")
            .select("*")
            .where({id: id})
            return{
                id: result[0].id,
                photo: result[0].photo,
                description: result[0].description,
                type: result[0].type,
                createAt: result[0].createAt,
                authorId: result[0].authorId
            }
        }catch(error:any){
            throw new Error(error.sqlMessage || error.message)
        }
    };

    getPost= async(id: string) => {
        try{
            const response = await this.connection("Labook_posts")
            .select("id", "photo", "description", "type", "createAt", "authorId")
            .where({id: id})
            return response
        }catch (error:any){
            throw new Error("Error in get post")
        }
    }
}