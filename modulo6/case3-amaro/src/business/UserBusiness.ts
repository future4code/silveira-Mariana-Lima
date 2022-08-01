import { IdGenerator } from './../services/IdGeneratoe';
import { UserDatabase } from './../data/UserDatabase';
import { Authenticator } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';
import { UserInputDTO } from '../types/DTO/UserInputDTO';
import { CustomError } from '../error/CustomError';
import { User } from '../model/User';
import { LoginIpuntDTO } from '../types/DTO/LoginInputDTO';

export class UserBusiness{
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator,
        private hashManager: HashManager
    ){}

    public async signup(input: UserInputDTO): Promise<void>{
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
            const user = new User(id, name, email, cypherPassword)

            await this.userDatabase.insertUser(user)
        }catch (error: any){
            throw new CustomError(error.statusCode, error.message)
        };
    };

    public async login(input: LoginIpuntDTO) {
        try{
            const { email, password } = input;

            if(!email){
                throw new CustomError(422,"The email input is empty");
            } else if (email.indexOf("@") === -1){
                throw new CustomError(422,"Your email needs an @");
            };

            if(!password){
                throw new CustomError(422, "The password input is empty");
            };

            const user = await this.userDatabase.getUserByEmail(email);
            if(!user){
                throw new CustomError(404, "Invalid credentials");
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

        }catch (error: any){
                throw new CustomError(error.statusCode, error.message)
            };
        };
    };
    
export default new UserBusiness(
    new UserDatabase(),
    new IdGenerator(),
    new Authenticator(),
    new HashManager()
)