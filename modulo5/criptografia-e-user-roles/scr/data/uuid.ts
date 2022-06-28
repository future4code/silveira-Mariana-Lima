import { v4 } from "uuid";
import { Authentication } from "../types" ;
import * as jwt from "jsonwebtoken";

export const generateId = ():string => {
    return v4()
}

const expiresIn = "30min"
export const generateToken = (input: Authentication) => {
    const token = jwt.sign(
        {
            id: input.id,
            role: input.role
        },
        "bananinha",
        {
            expiresIn
        }
    )
    return token
}

export const getData = (token: string): Authentication => {
    const payload = jwt.verify(token, "bananinha") as any
    const result: Authentication = {
        id: payload.id,
        role: payload.role
    }
    return result
}