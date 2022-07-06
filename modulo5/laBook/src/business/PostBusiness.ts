import { UserDatabase } from '../data/UserDatabase';
import { HashManager } from '../services/HashManager';
import { Post} from '../types/Types';
import { IdGenerator } from './../services/IdGenerator';
import { PostDataBase } from '../data/PostDatabase';

const idGenerator = new IdGenerator()
const hashManager = new HashManager()
const userDatabase = new UserDatabase()
const postDatabase = new PostDataBase()

export class PostBussines {
    async createPost( post: Post) {
        try {
            if (!post.photo || !post.description || !post.type || !post.created_at) {
                throw new Error("Please, fill all the fiels!")
            }

            const id = idGenerator.generateId()

            const newPostBase = new PostDataBase().createPost(post)
            return newPostBase
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }  
    } 
}