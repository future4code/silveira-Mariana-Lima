import { AuthenticationData } from '../types/Types';
import * as jwt from "jsonwebtoken";

export class Authenticator {
    generateToken = (id: AuthenticationData) => {
        return jwt.sign(
            id,
            "r2d2c3po",
            {
                expiresIn: "1h"
            }
        )
    }

    getTokenData = (token: string): AuthenticationData => {
        return jwt.verify(token, "r2d2c3po") as AuthenticationData
    }
}