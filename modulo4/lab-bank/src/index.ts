import express, { Request, Response } from "express";
import cors from "cors";
import { user, User, Extract } from "./data";

const app = express();
app.use(express.json());
app.use(cors());

app.post ("/users/newUser", (req: Request, res: Response) =>{
    let errorCode = 400
    const {name, birthDate, cpf, balance, extract} = req.body
    

     try{
         const[day, month, year] = req.body.birthDate.split("/")

         const birth: Date = new Date(`${year}-${month}-${day}`)

         const age = Date.now() - birth.getTime()
         

         if(age < 18){
             errorCode = 405
             throw new Error("The age must be greater than 18")
         }
        if(!name || !birthDate || !cpf || (!balance && balance !==0) || !extract){
            errorCode = 422
            throw new Error("Invalid parameter")
        }
        const newUser: User = {
            name,
            birthDate,
            cpf,
            balance,
            extract
        } 
        user.push(newUser)
        res.status(201).send(user)

     } catch(error: any){
        res.status(errorCode).send({message: error.message})
     }
})

app.get("/users", (req: Request, res: Response) =>{
    let errorCode = 400
    try{
        if(!user){
            errorCode = 404
            throw new Error ("Not Found")
        }
       res.status(200).send(user) 
    }catch(error: any){
        res.status(errorCode).send({message: error.message})
    }
    
})

app.get("/users/:cpf", (req: Request,res: Response) => {
    const cpf = Number(req.params.cpf)
    let errorCode = 400

    try{
        if(!cpf){
            errorCode = 404
            throw new Error("The cpf input is empty")
        }
        res.status(200).send(`${user.balance}`)
    }catch(error: any){
        res.status(error).send({message: error.message})
    }
})

const server = app.listen(3003, () => {
       console.log(`Server is running in http://localhost:3003`);
});