import { USER_ROLES } from './../types/User';
import { UserDatabase } from '../data/UserDatabase';
import { Authenticartor } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from './../services/IdGenerator';

const idGenerator = new IdGenerator()
const hashManager = new HashManager()
const userDatebase = new UserDatabase()
const authenticator = new Authenticartor()

export class UserBussines {
    signup = async(
        name: string,
        email: string,
        password: string,
        role : USER_ROLES
    ) => {
        if(!name || !email || !password || !role){
            throw new Error("Incorrect input. Verify the inputs")
        }

        const id = idGenerator.generateId()
        const cypherPassword = await hashManager.createHash(password)
        
        await userDatebase.insertUser({
            id: id,
            name: name,
            email: email,
            password: cypherPassword,
            role: role
        })
    }

    login = async(email: string, password: string) => {
        if(!email || !password){
            throw new Error("Incorrect login")
        }

        const user = userDatebase.selectUserbyEmail(email)
        if(!user){
            throw new Error("the user does not exist")
        }

        const validationPassword: boolean = await hashManager.compare(password, (await user).password)
        if(!validationPassword){
            throw new Error("Invalid Password")
        }

        const token = authenticator.generateToken({
            id:(await user).id,
            role:(await user).role
        })
        return token
    }

    getUsers = (token: string) => {
        if(!token){
            throw new Error("Invalid token")
        }
        const response = userDatebase.getUsers()
        return response
    }

    deleteUser = async (token: string, id: string) => {
        const user = authenticator.getTokenData(token)
        if(!token){
            throw new Error("Invalid token")
        }
        if(!id){
            throw new Error("Invalid id")
        }
        if(user.role !== "Administrator"){
            throw new Error("Only Admin can delet accounts")
        }

        const response = userDatebase.deleteUser(id)
        return response
    }
}