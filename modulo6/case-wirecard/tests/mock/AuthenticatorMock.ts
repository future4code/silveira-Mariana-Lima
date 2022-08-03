export type AuthenticationData = {
    id: string
}

export class AuthenticatorMock {
    public generateToken(input: AuthenticationData): string{
        return "token";
    }

    public getTokenData(token: string): AuthenticationData{
        if(!token){
            throw new Error("jwt")
        }
        let data = {}
        return data as AuthenticationData
    }
}