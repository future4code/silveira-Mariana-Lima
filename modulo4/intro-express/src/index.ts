import express, { Request, Response }  from "express";
import cors from "cors";

const app = express()

app.use(express.json())
app.use(cors())

// Exercício 1

app.get("/",(request: Request, response: Response) => {
    response.send("Hello from Express")
})

// Exercício 2


type Users={
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}


// Exercício 3


const users: Users[] = [
    {
        "id": 1,
        name: "Mariana",
        phone: 8183306684,
        email: "filhatronixmmlima@gmail.com",
        website: "https://github.com/future4code/silveira-Mariana-Lima"

    },
    {
        "id": 2,
        name: "Mayara",
        phone: 8183306685,
        email: "mayara@gmail.com",
        website: "https://insgram.com/Mayara-Lima"

    }
]
// Exercício 4
app.get("/users",(req:Request, res: Response)=> {
    res.status(200).send(users)
})

// Exercício 5

type Post = {
    id: string,
    title: string,
    body: string,
    userId: string
}

// Exercício 6

const post: Post[] = [
{
    id: "1",
    title: "Escola de programação",
    body: "Melhor curso de progrmação",
    userId:"2"
},
{
    id: "2",
    title: "Sport Club Recife",
    body: "Melhor clube do Nordeste",
    userId: "2"
}
]

// Exercício 7

app.get("/posts", (req: Request, res: Response) => {

    if(!post.length){
       res.status(401).send("Não tem posts.")
    }

    res.status(201).send(post)
})

app.listen(3003,()=> {
    console.log("Server is running in http://localhost:3003")
})