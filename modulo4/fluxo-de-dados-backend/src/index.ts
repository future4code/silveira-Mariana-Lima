import express, { Request, response, Response } from "express";
import cors from "cors";
import {products, Products} from "./data"

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test",(req: Request, res: Response) =>{
    res.send("Funcionando")
});

app.post("/product",(req,res) =>{
    const id = req.body.id
    const name = req.body.name
    const price: number = +req.body.price
    let newError: number = 400

    try{
        if(!req.body.name || !req.body.price){
            newError = 401
            throw new Error("Name e Price não foi recebido")
        }
        if(typeof(req.body.name !== "string")){
            newError = 422
            throw new Error ("Name está diferente de string")
        }
        if(typeof(req.body.price !== "number")){
            newError = 422
            throw new Error("Price está diferente de number")
        }
        if(req.body.price <= 0){
            newError = 422
            throw new Error ("Price menor ou igual a zero")
        }
    
    
        const newProducts: Products= {
        id: id,
        name: name,
        price: price
    }

    products.push(newProducts)

    res.send(products)
    }
    catch(error: any){
        if(newError == 200)
            res.status(500).send("Erro inesperado, tente novamento")
        else
            res.status(newError).send(error.message)
    }
});

app.get("/product",(req,res) =>{
    res.send(products)
});

app.put("/produto/:id/editar",(req, res) => {
    const id = req.params.id
    let newError: number = 400
    const productToEdit = products.find(product => product.id == id)

    try{
        if(!req.body.price){
            newError = 401
            throw new Error("Price não foi recebido")
        }
        if(typeof(req.body.price !== "number")){
            newError = 422
            throw new Error("Price está diferente de number")
        }
        if(req.body.price <= 0){
            newError = 422
            throw new Error ("Price menor ou igual a zero")
        }
        if(!id){
            newError = 404
            throw new Error ("Id não foi recebido")
        }
        if(!productToEdit){
            newError = 404
            throw new Error ("Produto não encontrado")
        }

    const editarProduto = products.map(produto => produto.id === id ?
        { ...produto,
        name: req.body.name,
        price: req.body.price}
        : produto)
        res.status(201).send(editarProduto)
    }
    catch(error: any){
        if(newError == 200)
            res.status(500).send("Erro inesperado, tente novamento")
        else
            res.status(newError).send(error.message)
    }
})

app.delete("/produtos/:id/deleta", (req,res) => {
    const id = req.params.id
    let newError = 400
    const deleteToEdit = products.find(product => product.id == id)

    try{
        if(!id){
            newError = 404
            throw new Error ("Id não foi recebido")
        }
        if(!deleteToEdit){
            newError = 404
            throw new Error ("Produto não encontrado")
        }


      const deletarProduto = products.findIndex((product) => product.id == id);
        products.splice(deletarProduto, 1)
        res.status(201).send(products)  
    }
    catch(error: any){
        if(newError == 200)
            res.status(500).send("Erro inesperado, tente novamento")
        else
            res.status(newError).send(error.message)
    }    
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});