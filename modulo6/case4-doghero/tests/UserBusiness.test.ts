import { UserBussiness } from "../src/business/UserBusiness";
import { UserDatabase } from "../src/data/UserDatabase";
import { CustomError } from "../src/error/CustomError";
import { Authenticator } from "../src/services/Authenticator";
import { HashManager } from "../src/services/HashManager";
import { IdGenerator } from "../src/services/IdGenerator";
import { LoginInputDTO } from "../src/types/DTO/LoginInputDTO";
import { UserInputMockDTO } from "../src/types/DTO/UserInputDTO";

const UserBusinessMock = new UserBussiness(
    new IdGenerator(),
    new HashManager(),
    new Authenticator(),
    new UserDatabase()
);

describe("Sign Tests", () => {
    test("Name fiel is empty", async () => {
        try{
            const inputMock: UserInputMockDTO = {
                id: "id",
                name: "",
                email: "email@dev.com",
                password: "password"
            };

            await UserBusinessMock.signup(inputMock)

        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("The name input is empty");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test("Email fiel is empty", async () => {
        try{
            const inputMock: UserInputMockDTO = {
                id: "id",
                name: "name",
                email: "",
                password: "password"
            };

            await UserBusinessMock.signup(inputMock)

        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("The email input is empty");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test("Password fiel is empty", async () => {
        try{
            const inputMock: UserInputMockDTO = {
                id: "id",
                name: "name",
                email: "email@dev.com",
                password: ""
            };

            await UserBusinessMock.signup(inputMock)

        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("The password input is empty");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test("Create User", async () => {
        try{
            const inputMock: UserInputMockDTO = {
                id: "id",
                name: "name",
                email: "email@dev.com",
                password: "password"
            };

            await UserBusinessMock.signup(inputMock)

        }catch (error) {
            if (error instanceof CustomError) {
            }
        }
    });
})

describe("Login Tests", () => {
    test("Email fiel is empty", async () => {
        try{
            const inputMock = {
                email: "",
                password: "password"
            };

            await UserBusinessMock.login(inputMock)

        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("The email input is empty");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test("Password fiel is empty", async () => {
        try{
            const inputMock = {
                email: "email@dev.com",
                password: ""
            };

            await UserBusinessMock.login(inputMock)

        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("Invalid credentials");
              expect(error.statusCode).toEqual(401);
            }
        }
    });

    test("Login Successfully", async () => {
        try{
            const inputMock = {
                email: "email@dev.com",
                password: "password"
            };

            await UserBusinessMock.login(inputMock)

        }catch (error) {
            if (error instanceof CustomError) {
        }
        }
    });
});