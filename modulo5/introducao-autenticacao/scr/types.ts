export class User {
    constructor(
        protected id: string,
        protected name: string,
        protected password: string
    ) {}
}

export type Authentication = {
    id: string
}