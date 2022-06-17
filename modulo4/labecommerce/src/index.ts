import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { createUser } from './endpoints/createUsers';
import { getAllUsers } from './endpoints/getAllUsers';
import { createProducts } from './endpoints/createProducts';
import { getAllProducts } from './endpoints/getAllProducts';
import { purchaseRecord } from './endpoints/purchaseRecord';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/users", createUser)
app.get("/users", getAllUsers)
app.post("/products", createProducts)
app.get("/products", getAllProducts)
app.post("/purchases", purchaseRecord)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});