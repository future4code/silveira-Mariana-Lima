import { SearchProductMock } from './ProductMock';
import { ProductInputMockDTO, SearchProductMockDTO } from './../../../src/types/DTO/ProductInputDTO';

export class ProductDatabaseMock {
    public async insertProduct(product: ProductInputMockDTO): Promise<void> {};

    public async  getProduct(search: string): Promise<SearchProductMockDTO | undefined>{
        switch(search){
            case "search":
                return SearchProductMock
            default: 
                return undefined
        }
    }
} 