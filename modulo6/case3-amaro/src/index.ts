import { ProductRouter } from './router/ProductRouter';
import { UserRouter } from './router/UserRouter';
import express  from 'express';
import { app } from './services/App';
import cors from 'cors';

app.use(express.json())
app.use(cors())

app.use("/users", UserRouter)
app.use("/product", ProductRouter)