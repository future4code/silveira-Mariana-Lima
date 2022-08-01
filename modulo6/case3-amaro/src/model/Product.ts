export class Product {
    constructor(
        private id: string,
        private name: string,
        private tags: string
    ){}

    public getId = () => {
        return this.id
    };

    public getname = () => {
        return this.name
    };

    public getTags = () => {
        return this.tags
    };
}