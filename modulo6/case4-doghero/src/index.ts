import { DogWalkRouter } from './router/DogWalkRouter';
import cors from "cors";
import express from "express";
import { app } from "./services/App";
import { UserRouter } from './router/UserRouter';

app.use(express.json())
app.use(cors())

app.use("/users", UserRouter)
app.use("/dogwalking", DogWalkRouter)