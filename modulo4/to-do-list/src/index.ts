import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/user", async (req: Request, res: Response) => {
    let erroCode = 400

    try{
        if("!req.body.name"){
            erroCode = 404
            throw new Error("The name input is empty")
        } else if("!req.body.nickname"){
            erroCode = 404
            throw new Error("The nickname input is empty")
        } else if("!req.body.email"){
            erroCode = 404
            throw new Error("The email input is empty")
        }

        await connection("TodoListUser")
        .insert({
            id: Date.now().toString(),
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        })
        res.status(201).send("User succefully created")
        
    } catch (error:any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
})

app.get("/user/:id", async (req: Request, res: Response) => {
    let erroCode = 400

    try{
        if(typeof(req.params.id) !== "string" || !req.params.id || undefined || "" ){
            erroCode = 404
            throw new Error("The id input is empty")
        }
       

        const result = await connection("TodoListUser")
        .select("id", "nickname")
        .where({id: req.params.id})

        res.send(result[0])
        
         if(result.length === 0){
            erroCode = 404
            throw new Error("User not found, Try again. Invalid id")
        }
    } catch (error:any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
})

app.put("/user/edit/:id",async (req: Request, res: Response) =>{
    let erroCode = 400

    try{
        if(!req.body.nickname) {
            erroCode = 404
            throw new Error("The nickname input is empty")
        } else if (!req.body.email) {
            erroCode = 404
            throw new Error("The email input is empty")
        } else if (!req.params.id) {
            erroCode = 404
            throw new Error("The id is invalid")
        }

       await connection("TodoListUser")
       .update({
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email
       })
       .where({id: req.params.id})


        res.status(200).send("User succefully updated");
    
    } catch (error : any){
        res.status(erroCode).send(error.sqMessage || error.message)
    }
})

app.post("/task", async (req: Request, res: Response) => {
    let erroCode = 400
    const {limit_date} = req.body
    const limitDate = limit_date.split("/").reverse().join("-")

    try{
        if(!req.body.title){
            erroCode = 404
            throw new Error("The input title is empty")
        } 
        if(!req.body.description){
            erroCode = 404
            throw new Error("The input description is empty")
        }
        if(!limitDate){
            erroCode = 404
            throw new Error("The input limit date is empty")
        }
        if(!req.body.creator_user_id){
            erroCode = 404
            throw new Error("The input creator user id is empty")
        }

        await connection("TodoListTask")
        .insert({
            id: Date.now().toString(),
            title: req.body.title,
            description: req.body.description,
            limit_date: limitDate,
            creator_user_id: req.body.creator_user_id
        })
        res.status(201).send("Taks Created")
    } catch(erro: any){
        res.status(erroCode).send(erro.sqlMessage || erro.massage)
    }
})

app.get("/task/:id", async (req: Request, res: Response) => {
    let erroCode = 400
    // const {limit_date} = req.body
    // const limitDate = limit_date.split("-").reverse().join("/")
    try{
        if(!req.params.id){
            erroCode = 404
            throw new Error("The id input is empty")
        }
        
        const result = await connection("TodoListTask")
        .select("*")
        .where({id: req.params.id})
        res.status(201).send(result[0])

    } catch(erro: any){
        res.status(erroCode).send(erro.sqlMessage || erro.massage)
    }
})

app.get("/users/all", async(req: Request, res: Response) => {
    let erroCode = 400

    try {
        const result = await connection("TodoListUser")
        .select("*")

        res.status(200).send(result)

    } catch (error:any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
})

app.get("/task", async(req: Request, res: Response) => {
    let erroCode = 400

    try {
        const result = await connection("TodoListTask")
        .select("*")

        res.status(200).send(result)

    } catch (error:any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
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