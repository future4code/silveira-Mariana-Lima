import { AuthenticationData } from "../../src/types/AuthenticationData"

export class TokenGeneratorMock {
    public generate = (input: AuthenticationData): string => {
        return "token"
    }

    public verify(token: string) {
        return {
            id: "id_mock",
        }
    }
};