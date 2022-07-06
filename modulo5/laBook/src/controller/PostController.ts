import { Authenticator } from './../services/Authenticantor';
import { Request, Response } from "express";
import { PostBussines } from "../business/PostBusiness";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Post } from "../types/Types";
import { PostDataBase } from '../data/PostDatabase';
    
const postBusiness = new PostBussines()
const idGenerator = new IdGenerator()
const authenticator = new Authenticator() 
const userDatabase = new UserDatabase()
const postDatabase = new PostDataBase() 
export class PostController {
    createPost = async(req: Request, res: Response) => {
        try{
            const {photo, description, type} = req.body
            const token = new Authenticator().getTokenData(req.headers.authorization as string);
            const data = await new UserDatabase().getUserById(token.id)
            const id = idGenerator.generateId()

            if (!data) {
                throw new Error("Make sure you are logged in before post something!")
            }

            const newPost:Post = {
                id: id,
                photo,
                description,
                type,
                created_at: new Date(),
                author_id: token.id
            }


            const post = await postBusiness.createPost(newPost)
            res.status(201).send("Created Post")
        }catch (error:any){
            res.status(400).send(error.sqlMessage || error.message)
        }
    }


    SelectPost = async(req: Request, res: Response) => {
        try {
            const token = authenticator.getTokenData(req.headers.authorization as string)
            const postId = req.params.id
            const user = userDatabase.getUserById(token.id)

            if (!user) {
                throw new Error("Make sure you are logged in before search posts!")
            }

            if (!postId) {
                throw new Error("Please, enter the id of the post you want to search!")
            }

            const post = await postDatabase.getPostById(postId)
            res.status(201).send(post)
        }catch(error:any){
            throw new Error(error.sqlMessage || error.message)
        }
    }
}
