import { Post } from './../types/Types';
import { BaseDatabase } from './BaseDatabase';




export class PostDataBase extends BaseDatabase {

    createPost = async(post: Post) => {
        try {
            await this.connection("Labook_posts")
                .insert({
                    id: post.id,
                    photo: post.photo,
                    description: post.description,
                    type: post.type,
                    created_at: post.created_at,
                    author_id: post.author_id
                })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };

    getPostById = async(id: string): Promise<any> => {
            const result = await this.connection("Labook_posts")
            .select("*")
            .where({id: id})
            return result[0]
    };
}