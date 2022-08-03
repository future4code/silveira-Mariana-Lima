import { UserDatabase } from './../src/data/UserDatabase';
import { UserBussiness } from './../src/bussiness/UserBussiness';
import { AuthenticatorMock } from './mock/AuthenticatorMock';
import { HashMockGenerator } from './mock/HashGeneretorMock';
import { IdGeneratorMock } from './mock/IdGeneratorMock';
import { UserDatabaseMock } from './mock/User/UserDatabaseMock';

const userBussinessMock = new UserBussiness(
    new IdGeneratorMock(),
    new HashMockGenerator(),
    new AuthenticatorMock(),
    new UserDatabaseMock() as UserDatabase
)

describe("Testando o Signup", () => {
    test("Testando nome",  async () => {
        try {
            await userBussinessMock.singup("","mayara@dev.com","123456789","12345678912")
        } catch(error: any){
            expect(error.message).toEqual("Missing input")
            expect(error.statusCode).toBe(422)
        } finally {
            expect.assertions(2)
        }
    });

    test("testando email", async () => {
        try{
            await userBussinessMock.singup("mayara", "", "123456789", "12345678912")
        }catch(error: any){
            expect(error.message).toEqual("Missing input")
            expect(error.statusCode).toBe(422)
        } finally {
            expect.assertions(2)
        }
    });

    test("testando senha", async () => {
        try{
            await userBussinessMock.singup("mayara", "mayara@dev.com", "", "12345678912")
        }catch(error: any){
            expect(error.message).toEqual("Missing input")
            expect(error.statusCode).toBe(422)
        } finally {
            expect.assertions(2)
        }
    });

    test("testando cpf", async () => {
        try{
            await userBussinessMock.singup("mayara", "mayara@dev.com", "123456789", "")
        }catch(error: any){
            expect(error.message).toEqual("Missing input")
            expect(error.statusCode).toBe(422)
        } finally {
            expect.assertions(2)
        }
    });

    test("Sucesso no cadastro", async () => {
        try {
            const {token} = await userBussinessMock.singup("mayara", "mayara@dev.com", "123456789", "12345678912")
            expect(token).toEqual("token")
        } catch(error: any) {
            console.log(error)
        } finally {
            expect.assertions(1)
        }
    });
});
