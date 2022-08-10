import { DogWalkRouter } from './router/DogWalkRouter';
import cors from "cors";
import express from "express";
import { app } from "./services/App";

app.use(express.json())
app.use(cors())

app.use("/dogwalking", DogWalkRouter)