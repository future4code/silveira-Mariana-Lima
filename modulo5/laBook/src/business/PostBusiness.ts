import { UserDatabase } from '../data/UserDatabase';
import { HashManager } from '../services/HashManager';
import { POST_TYPES } from '../types/Types';
import { IdGenerator } from './../services/IdGenerator';

const idGenerator = new IdGenerator()
const hashManager = new HashManager()
const userDatebase = new UserDatabase()

export class PostBussines {
    createPost = async(
        photo: string,
        description: string,
        type: POST_TYPES,
        createAt: Date,
        authorId: string
    ) => {
        if(!photo || !description || !type || !createAt || !authorId){
            throw new Error("Incorrect input. Verify the inputs")
        }

        const id = idGenerator.generateId()

        await userDatebase.insertPost({
            id: id,
            photo: photo,
            description: description,
            type: type,
            createAt: createAt,
            authorId: authorId 
        })
    }

    getPost = (token: string, id: string) => {
        if(!token){
            throw new Error("Invalid token")
        }
        const response = userDatebase.getPost(id)
        return response
    }
}