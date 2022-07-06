import { AuthenticationData } from './../types/Types';
import { UserDatabase } from '../data/UserDatabase';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from './../services/IdGenerator';
import { Authenticator } from '../services/Authenticantor';

const idGenerator = new IdGenerator()
const hashManager = new HashManager()
const userDatabase = new UserDatabase()
const authenticator = new Authenticator()

export class UserBussines {
    signup = async (
        name: string,
        email: string,
        password: string
    ) => {
        if(!name || !email || !password){
            throw new Error("Incorrect input. Verify the inputs")
        }
        if (email.indexOf("@") === -1) {
            throw new Error("Invalid Email!")
        }
        if (password.length < 6) {
            throw new Error("Password must have at least 6 characters!")
        }

        const id = idGenerator.generateId()
        const cypherPassword = await hashManager.createHash(password)

        await userDatabase.insertUser({
            id: id,
            name: name,
            email: email,
            password: cypherPassword,
        })
    }

    login = async(email: string, password: string) => {
        if(!email || !password){
            throw new Error("Incorrect login")
        }

        const user = userDatabase.selectUserbyEmail(email)
        if(!user){
            throw new Error("the user does not exist")
        }

        const validationPassword: boolean = await hashManager.compare(password, (await user).password)
        if(!validationPassword){
            throw new Error("Invalid Password")
        }

        const token = authenticator.generateToken({
            id:(await user).id
        })
        return token
    }
}