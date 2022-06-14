import { getUserType } from '.';
import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { connection } from './connection';
import { getUserName } from "./endpoints/getUserName";
import { getUserType } from "./endpoints/getUserType";
import { getNameType } from "./endpoints/getNameType";
import { getFiveUser } from "./endpoints/getFiveUser";
import { getAllFuncs } from "./endpoints/getAllFuncs";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('/user', getUserName);
app.get('/users/type/:type', getUserType);
app.get("/users/order", getNameType)
app.get("/users/five", getFiveUser)
app.get("/users/allfuncs", getAllFuncs)

 ///Exercício 1
/// a)

 app.get("/user", async (req: Request, res: Response) => {
    let erroCode = 400

    try {
        const name = req.query.name as string

        const response = await connection.raw(
            `SELECT * FROM aula49_exercicio WHERE name LIKE '%${name}%'`
            )

        if(!response.length) {
            erroCode = 404
            throw new Error("Employee not found")
        } 

        res.send(response[0])

    } catch (error:any) {
        res.status(erroCode).send(error.message)
    }
})

///b)

app.get("/users/type/:type", async(req: Request, res: Response) => {
    let erroCode = 400

    try {
        const type = req.params.type as string

        const response = await connection.raw(
            `SELECT * FROM aula49_exercicio WHERE type LIKE '%${type}%'`
            )

            if(!response.length) {
                erroCode = 404
                throw new Error("Employee not found")
            }

            res.send(response[0])

    } catch (error:any) {
        res.status(erroCode).send(error.message || error.sqlMessage)
    }
})

///Exercício 2

app.get("/users/order", async (req: Request, res: Response) => {
    let erroCode = 400

    try {

        const type = req.query.type as string
        if(!type){
        const response = await connection.raw(`
            SELECT * FROM aula49_exercicio WHERE type LIKE '%${type}%' ORDER BY name ASC
            `)

        if(!response.length) {
            erroCode = 404
            throw new Error("Employee not found")
        }

        res.send(response[0])   
        }
        const response = await connection.raw(`
            SELECT * FROM aula49_exercicio WHERE name LIKE '%${type}%' ORDER BY email ASC
            `)

        if(!response.length) {
            erroCode = 404
            throw new Error("Employee not found")
        }

    } catch (error:any) {
        res.status(erroCode).send(error.message || error.sqlMessage)
    }
})


///Exercício 3

app.get("/users/five", async (req: Request, res: Response) => {
    let erroCode = 400

    try {
        let page = Number(req.query.page)
        let offset = 5 * (page - 1)

        const response = await connection.raw(`
            SELECT * FROM aula49_exercicio LIMIT 5 OFFSET ${offset}
        `)

        res.send(response[0])
    } catch (error:any) {
        res.status(erroCode).send(error.message || error.sqlMessage)
    }
})

///Exercício 4

app.get("/allfuncs", async(req: Request, res: Response) => {
    let erroCode = 400
    let size = 5
    let page = Number(req.query.page)
    let offset = size * (page - 1)
    const type = req.query.type as string

    try {
        if(!type){
        const response = await connection.raw(`
            SELECT * FROM aula49_exercicio LIMIT 5 OFFSET ${offset} ORDER BY id ASC`)
    
            res.send(response[0])
        }

        const response = await connection.raw(`
            SELECT * FROM aula49_exercicio WHERE type LIKE '%${type}%' ORDER BY id ASC LIMIT 5 OFFSET ${offset} 
        `)

        res.send(response[0])
    } catch (error:any) {
        res.status(erroCode).send(error.message || error.sqlMessage)
    }

    

})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});