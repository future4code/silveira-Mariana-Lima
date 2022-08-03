import { Product } from "../model/Product";
import  BaseDatabase  from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {

    protected TABLE_NAME: string = "product_amaro";

    private toModel(dbModel?: any): Product | undefined {
        return(
            dbModel &&
            new Product(
                dbModel.id,
                dbModel.name,
                dbModel.tags
            ));
    };

    public async insertProduct(product: Product): Promise<void> {
        try{
            await BaseDatabase.connection(this.TABLE_NAME).insert({
                id: product.getId(),
                name: product.getName(),
                tags: product.getTags()
            });
        }catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    };
        
    public async getProduct(search: string) {
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME)
            .select("*")
            .where("id", "like", `${search}`)
            .or
            .where("tags", "like", `%${search}%`)
            .or
            .where("name", "like", `%${search}%`);
            return result
        } catch(error: any){
            throw new Error(error.sqlMessage || error.message)
        }
    };

    public async getAllProducts() {
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME)
            return this.toModel(result);
        }catch(error: any) {
            throw new Error(error.message)
        }
    };

    public async getProductById(id: string) {
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME)
            .select("*")
            .where("id", id )
            return this.toModel(result[0][0]);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
          }
    };
} 