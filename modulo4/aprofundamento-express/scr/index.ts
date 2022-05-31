import express, { request, response } from "express";
import cors from "cors";
import { truncate } from "fs";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})

type Tasks = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const task: Tasks = [
    {
        "userId": 1,
        "id": 1,
        "title": "Acorda",
        "completed": true
    },
    {
        "userId": 2,
        "id": 2,
        "title": "Tomar Banho",
        "completed": true
    },
    {
        "userId": 3,
        "id": 3,
        "title": "Estudar",
        "completed": false
    }
]

app.post('/newtasks', (request, response) => {
    const users: number = Number(request.headers.authorization)
    const titleTask = request.body.title
    const id = task.length + 1

    const newTasks: Tasks = {
        userId: users,
        id: id,
        title: titleTask,
        completed: request.body.completed
    }
    task.push(newTasks)
    response.send(task)
});


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});