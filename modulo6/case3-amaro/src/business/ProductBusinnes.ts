import { Product } from './../model/Product';
import { ProductDatabase } from './../data/ProductDatabase';
import { IdGenerator } from './../services/IdGeneratoe';
import { ProductInputDTO } from '../types/DTO/ProductInputDTO';
import { CustomError } from '../error/CustomError';


export class ProductBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private productDatabase: ProductDatabase
    ){}

    public async insertProduct (input: ProductInputDTO): Promise<any> {
        try{
            const { name, tags, token } = input;

            if (!name) {
                throw new CustomError(422,"The name input is empty");
            };
            if (!tags) {
               throw new CustomError(422,"The tags input is empty");
            };

            if(!token) {
                throw new Error("Verify you authorization")
            };

            const id = this.idGenerator.generateId();
            const product = new Product(id, name, tags);

            await this.productDatabase.insertProduct(product);

        }catch (error: any){
            throw new CustomError(error.statusCode, error.message)
        };        
    };
   
    public async getProduct(search: string, token: string) {
        try{
            if(!search) {
            this.productDatabase.getAllProducts
        };
        if(!token) {
            throw new Error("Verify you authorization")
        };

        const result =  await this.productDatabase.getProduct(search);
        
        return result;

        }catch (error: any){
            throw new CustomError(error.statusCode, error.message)
        };
    }
}

export default new ProductBusiness(
    new IdGenerator(),
    new ProductDatabase()
)