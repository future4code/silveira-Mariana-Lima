export class Pets {
    constructor(
        private id: string,
        private name: string,
        private tutor: string
    ){}

    public getId = () => {
        return this.id
    };

    public getName = () => {
        return this.name
    };

    public getTutor = () => {
        return this.tutor
    };
}