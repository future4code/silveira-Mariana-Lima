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

/// 1 - Criar usuário

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

/// 2 - Pega usuário pelo id

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

/// 3 - Edita usuário

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

/// 4 - Criar tarefa

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

/// 5 - Pegar tarefa pelo id 

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


/// 6 - Pegar todos os usuários 

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

/// 7 - Pegar tarefas criadas por um usário - NÃO FUNCIONA

app.get("/task", async(req: Request, res: Response) => {
    let erroCode = 400
    const id = req.query.id  as string;

    try {
        const result = await connection("TodoListTask")
        .join("TodoListUser", "TodoListUser.id", "TodoListTask.creator_user_id")
        .select("TodoListUser.*","TodoListUser.nickname")
        .where({creator_user_id: id})

        res.status(200).send(result[0])

    } catch (error:any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
})

/// 8 - Pesquisar usuário 

app.get("/user", async(req: Request, res: Response) => {
    let erroCode = 400

    try {

        const result = await connection("TodoListUser")
        .select("TodoListUser.id", "TodoListUser.nickname")
        .where({"TodoListUser.nickname": req.query.nickname})


        res.send(result[0])

    } catch (error:any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
})

/// 9 - Atribuir um usuário responsável a uma tarefa
/// 10 -Pegar usuários responsáveis por uma tarefa
/// 11. Pegar tarefa pelo id e os responsáveis por ela


/// 12. Atualizar o status da tarefa pelo id

app.put("/task/status/:id", async(req: Request, res: Response) => {
    let erroCode = 400

    try {
        if(!req.body.status) {
            erroCode = 404
            throw new Error("The status input is empty")
        }  else if (!req.params.id) {
            erroCode = 404
            throw new Error("The id is invalid")
        }

        await connection ("TodoListTask")
        .update({status: req.body.status})
        .where({id: req.params.id})

        res.send("Task succefully updated")

    } catch (error:any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
})

/// 13. Pegar todas as tarefas por status - NÃO FUNCIONA

app.get("/task/:status", async(req: Request, res: Response) => {
    let erroCode = 400

    try {
        if(!req.params.status) {
            erroCode = 404
            throw new Error("The status input is empty")
        }

        const result = await connection("TodoListTask")
        .select("*")
        .where({status: req.params.status})

        res.status(200).send(result[0])

    }catch (error:any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
})

/// 14. Pegar todas as tarefas atrasadas - NÃO FUNCIONA

app.get("/task/delayed", async(req: Request, res: Response) => {
    let erroCode = 400

    try {
        if(!req.params.status) {
            erroCode = 404
            throw new Error("The status input is empty")
        }

        const result = await connection("TodoListTask")
        .select("*")
        .where({status: "to_do"})

        res.status(200).send(result[0])

    }catch (error:any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
})


/// 15. Retirar um usuário responsável de uma tarefa
/// 16. Atribuir mais de um responsável a uma tarefa
/// 17. Procurar tarefa por termos 
/// 18. Atualizar o status de várias tarefas

/// 19. Deletar tarefa

app.delete("/task/:id", async(req:Request, res: Response) => {
    let erroCode = 400
    
    try{
        await connection("TodoListTask")
        .delete()
        .where({id: req.params.id})

        res.status(200).send("Task deleted")
    } catch (error:any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
})

/// 20. Deletar usuário - Se tiver "Task" para aquele "User", não vai conseguir excluir o usuário

app.delete("/user/:id", async(req: Request, res: Response): Promise<any> => {
    try {
        await connection("TodoListUser")
        .delete()
        .where({id: req.params.id})

        res.send("User deleted")
    } catch (error:any) {
        res.status(400).send(error.sqlMessage || error.message)
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