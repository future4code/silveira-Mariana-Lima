import { v4 } from "uuid";
import { app } from "./app";
import { createUser } from './endpoindts/createUser';
import * as jwt from "jsonwebtoken";
import { Authentication } from "./types";
import { Signup } from "./endpoindts/signup";
import { Login } from './endpoindts/login';
import { getUserInformation } from './endpoindts/getUserInformation';


/// Exercício 1

//a) Sim
//b)

export const gereneteId = () : string => {
    return v4()
}

/// exercício 2

//a) Primeira ele pega o nome da tabela e armazena dentro de uma variavel, depois ele faz a connexao com o banco de dados, por ultimo ele faz a funcao de criar um user.

//b) Resposta no arquivo SQL.sql

//c) 

app.post("/createUser", createUser)

// Exercicío 3

//a)"garantindo a ela que aquela propriedade vai retornar como string

//b)

const expiresIn = "10min"
export const generateToken = (input: Authentication) => {
    const token = jwt.sign(
        {
            id: input.id
        },
        "bananinha",
        {
            expiresIn
        }
    )
    return token
}

// Exercício 4

// Login.ts

app.post("/user/signup", Signup)

// Exercício 5

//getUserByEmail.ts

// Exercício 6

//login.ts

app.post("/user/login", Login)

// Exercício 7
//a) Retorna tudo.(String, Number, Array, etc)
//b)
export const getData = (token: string): Authentication => {
    const payload = jwt.verify(token, "bananinha") as any
    const result = {
        id: payload.id
    }
    return result
}

// // Exercício 8
//a) getUserById.ts
//b) 
app.get("/user/profile", getUserInformation)