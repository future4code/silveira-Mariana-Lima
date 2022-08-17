import { UserInputMockDTO } from "../../src/types/DTO/UserInputDTO";
import { userMock } from "./UserMock";

export class UserDatabaseMock {
    public async insertUser(user: UserInputMockDTO): Promise<void> {};

    public async selectUserByEmail(email: string): Promise<UserInputMockDTO | undefined> {
        switch(email){
            case "email@dev.com": 
                return userMock
            default:
                return undefined
        }
    };
};