import { createUser } from './endpoints/createUser';
import { getUser } from './endpoints/getUser';
import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());

///Exercício 1

app.get("/users/:cep", getUser)


///Exercício 2

// CREATE TABLE users_cep (
    // 	id VARCHAR(255) PRIMARY KEY,
    //  cep INT NOT NULL,
    //  numero INT NOT NULL, 
    //  bairro VARCHAR(255),
    //  cidade VARCHAR(255),
    //  estado VARCHAR(255)
// )


/// Exercício 3

app.post("/users/", createUser)



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});