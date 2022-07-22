import { HashMockGenerator } from './mock/HashGeneretorMock';
import { IdGeneratorMock } from './mock/IdGeneratorMock';
import { AuthenticatorMock } from './mock/AuthenticatorMock';
import { CardDatabase } from '../src/data/CardDatabase';
import { CardDatabaseMock } from './mock/Card/CardDatabaseMock';
import { CardBussiness } from '../src/bussiness/CardBussiness';



const cardBussinessMock = new CardBussiness(
    new IdGeneratorMock(),
    new HashMockGenerator(),
    new CardDatabaseMock() as CardDatabase,
    new AuthenticatorMock(),
)

describe("Testando criação de cartão", () => {
    test("Testando Number", async () => {
        try {
            const {token} = await cardBussinessMock.insertCard("","mayara", "2026/12/12", "123")
            expect(token).toEqual("token")
        } catch(error: any) {
            expect(error.message).toEqual("Invalid credentials")
            expect(error.statusCode).toBe(401)
        } finally {
            expect.assertions(2)
        }
    });
}