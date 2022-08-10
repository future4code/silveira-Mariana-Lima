import { ProductInputMockDTO, SearchProductMockDTO } from './../src/types/DTO/ProductInputDTO';
import { ProductDatabase } from '../src/data/ProductDatabase';
import { IdGenerator } from '../src/services/IdGeneratoe';
import { ProductBusiness } from './../src/business/ProductBusinnes';
import { CustomError } from '../src/error/CustomError';

const ProductBusinessMock = new ProductBusiness(
    new IdGenerator(),
    new ProductDatabase()
);

describe("Create Product", () => {
    test("Name fiel is empty", async () => {
        try{
            const inputMock: ProductInputMockDTO = {
                id: "id",
                name: "",
                tags: "tags",
                token: "token"
            }

            await ProductBusinessMock.insertProduct(inputMock)
        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("The name input is empty");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test("Tags fiel is empty", async () => {
        try{
            const inputMock: ProductInputMockDTO = {
                id: "id",
                name: "name",
                tags: "",
                token: "token"
            }

            await ProductBusinessMock.insertProduct(inputMock)
        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("The tags input is empty");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test("token fiel is empty", async () => {
        try{
            const inputMock: ProductInputMockDTO = {
                id: "id",
                name: "name",
                tags: "tags",
                token: ""
            }

            await ProductBusinessMock.insertProduct(inputMock)
        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("Verify you authorization");
              expect(error.statusCode).toEqual(undefined);
            }
        }
    });

    test("Create Product", async () => {
        try{
            const inputMock: ProductInputMockDTO = {
                id: "id",
                name: "name",
                tags: "tags",
                token: "token"
            };

            await ProductBusinessMock.insertProduct(inputMock)

        }catch (error) {
            if (error instanceof CustomError) {
            }
        }
    });
});

    describe("Get Product", () => {
        test("Search fiel is empty", async () => {
            try{

                await ProductBusinessMock.getProduct("","token");

            }catch (error) {
                if (error instanceof CustomError) {
                  expect(error.message).toEqual("The search input is empty");
                  expect(error.statusCode).toEqual(422);
                }
            }
        });
    
        test("token fiel is empty", async () => {
            try{

                await ProductBusinessMock.getProduct("search","");

            }catch (error) {
                if (error instanceof CustomError) {
                  expect(error.message).toEqual("Verify you authorization");
                  expect(error.statusCode).toEqual(undefined);
                }
            }
        });

        test("Get Product", async () => {
            try{
    
                await ProductBusinessMock.getProduct("search", "token")
    
            }catch (error) {
                if (error instanceof CustomError) {
                }
            }
        });
})