import { User } from "../../../src/models/User";
import { userMock } from "./UserMock";

export class UserDatabaseMock {
    public async insertUser(user: User): Promise<void> {

    }

    public async getUserByEmail(email: string): Promise<User | undefined> {
        switch(email){
            case "mayara@dev.com":
                return userMock
            default:
                return undefined
        }
    }
}