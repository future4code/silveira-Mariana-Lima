import { Request, Response } from "express";
import { PostBussines } from "../business/PostBusiness";

const postBussines = new PostBussines()

export class PostController {
    createPost= async(req: Request, res: Response) => {
        try{
            const {photo, description, type, createAt, authorId} = req.body

            const response = await postBussines.createPost(photo, description, type, createAt, authorId)
            res.status(201).send("Created Post")
        }catch (error:any){
            res.status(400).send(error.sqlMessage || error.message)
        }
    }

    getPost = async(req: Request, res: Response) =>{
        try{ 
            const token = req.headers.authorization as string
            const id = req.params.id as string
            const response = await postBussines.getPost(token, id)
            res.send(response)
        }catch (error:any){
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
}