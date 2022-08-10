import { LoginInputDTO } from './../types/DTO/LoginInputDTO';
import { UserInputDTO } from './../types/DTO/UserInputDTO';
import { Authenticator } from './../services/Authenticator';
import { UserDatabase } from './../data/UserDatabase';
import { HashManager } from "../services/HashManager";
import { User } from '../model/User';
import { IdGenerator } from '../services/IdGeneratoe';
import { CustomError } from '../error/CustomError';

export class UserBussiness {
    constructor(
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator,
        private userDatabase: UserDatabase
    ){}

    public async signup(input: UserInputDTO): Promise<any>{
        try{
            const { name, email, password } = input;

            if(!name) {
                throw new CustomError(422,"The name input is empty");
            };

            if(!email) {
                throw new CustomError(422,"The email input is empty");
            }else if (email.indexOf("@") === -1) {
                throw new CustomError( 422,"Your email needs an @");
            };

            if(!password) {
                throw new CustomError( 422,"The password input is empty");
            }else if( password.length < 6){
                throw new CustomError( 422,"the password must be longer than 6");
            };

            const id = this.idGenerator.generateId();
            const cypherPassword = await this.hashManager.hash(password);
            const user = new User(id, name, email, cypherPassword);

            await this.userDatabase.insertUser(user);

            const token = this.authenticator.generateToken({
                id: user.getId()
            });
            return token;
        }catch (error: any){
            throw new CustomError(error.statusCode, error.message)
        };
    };   

    public async login(input: LoginInputDTO){
        try{

            const { email, password } = input;
            
            if(!email){
                throw new CustomError(422,"The email input is empty");
            } else if (email.indexOf("@") === -1){
                throw new CustomError(422,"Your email needs an @");
            };

            const user = await this.userDatabase.selectUserByEmail(email);

            if(!user){
                throw new CustomError(401, "Invalid credentials");
            };

            const isPasswordCorrect = await this.hashManager.compare(
                password, user.getPassword()
            );

            if(!isPasswordCorrect){
                throw new CustomError(401, "Invalid credentials")
            };

            const token = this.authenticator.generateToken({
                id: user.getId()
            });
            return token;
        } catch (error: any){
            throw new CustomError(error.statusCode, error.message)
        };
    };
}

export default new UserBussiness(
    new IdGenerator(),
    new HashManager(),
    new Authenticator(),
    new UserDatabase()
) 