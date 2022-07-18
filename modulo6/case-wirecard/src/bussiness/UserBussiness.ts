import { CreditPayment } from './../models/Payment';
import { Authenticator } from './../services/Authenticator';
import { UserDatabase } from './../data/UserDatabase';
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator()
const hashManager = new HashManager()
const userDatabase = new UserDatabase()
const authenticator = new Authenticator()

export class UserBussiness {
    sing = async(name: string,email: string,cpf: string,password: string ) => {
        if(!name) {
            throw new Error("The name input is empty")
        }
        if(!email) {
            throw new Error("The email input is empty")
        } else if (email.indexOf("@") === -1) {
            throw new Error("Your email needs an @")
        }

        if(!cpf) {
            throw new Error("The cpf input is empty")
        } else if ( cpf.length < 11){
            throw new Error("Your CPF must be contain 11 numbers")
        }

        if(!password) {
            throw new Error("The password input is empty")
        }else if ( cpf.length < 6){
            throw new Error("the password must be longer than 6")
        }

        const id: string = idGenerator.generateId()
        const cypherPassword = await hashManager.hash(password)

        await userDatabase.insertUser({
            id: id,
            name: name,
            email: email,
            cpf: cpf,
            password: cypherPassword
        })
    }

    login = async (email: string, password: string) => {
        if(!email){
            throw new Error("The email input is empty")
        } else if (email.indexOf("@") === -1){
            throw new Error("Your email needs an @")
        }

        if(!password){
            throw new Error("The password input is empty")
        }

        const user = await userDatabase.selectUserByEmail(email)

        if(!user) {
            throw new Error ("The user does not exist")
        }

        const validationPassword = hashManager.compare(password, user.password)

        if(!validationPassword) {
            throw new Error("Password incorrect")
        }

        const token = authenticator.generateToken({id: user.id})
        
        return token
    }
}