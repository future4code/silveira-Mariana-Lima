export enum USER_ROLES {
    NORMAL = "Normal", 
    ADMIN = "Administrator"
}

export type AuthenticationData = {
    id: string,
    role: USER_ROLES
}

export type User = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: string
}