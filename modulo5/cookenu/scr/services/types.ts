import { hashSync, genSaltSync, compareSync } from "bcryptjs";
import * as jwt from "jsonwebtoken";

export class User {
    constructor(
        protected id: string,
        protected name: string,
        protected email: string,
        protected password: string
    ) {}
}

export class Recipes {
    constructor(
        protected id: string,
        protected title: string,
        protected description: string,
        protected creation: string,
        protected user_id: string
    ) {}
}

export class FollowSystem {
    constructor(
        protected id: string,
        protected user_id: string,
        protected user_follow: string,
    ) {}
}

export type Authentication = {
    id: string
}

export class HashManager {
    generateHash = (plainText: string) => {
        const cost: number = 12;
        const salt: string = genSaltSync(cost)
        const cypherText = hashSync(plainText, salt)
        return cypherText
    }

    compareHash = (plainText: string, cypherText: string): boolean => {
        return compareSync(plainText, cypherText)
    }
}

export const GenerateToken = (id: Authentication) => {
    return jwt.sign(
        {id},
        "r2d2c3po",
        {expiresIn: "1h"}
    )
}

export const GetTokenData = (token: string): Authentication | null => {
    try{
        return jwt.verify(token, "r2d2c3po") as Authentication
    }catch(error:any){
        return null
    }
}

const date = new Date()
const year = date.getFullYear()
const mounth = date.getMonth()
const day = date.getDay()

export const today = `${day}/${mounth}/${year}`