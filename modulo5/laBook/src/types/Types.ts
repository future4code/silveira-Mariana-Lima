export type AuthenticationData = {
    id: string
}

export type User = {
    id: string,
    name: string,
    email: string,
    password: string
}

export enum POST_TYPES {
    NORMAL = "Normal",
    EVENT = "Event"
}

export type Post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    created_at: Date,
    author_id: string
}