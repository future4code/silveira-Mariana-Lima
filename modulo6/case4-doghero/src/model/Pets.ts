export class Pets {
    constructor(
        private id: string,
        private pet_name: string,
        private pet_walk_id: string
    ){}

    public getId = () => {
        return this.id
    };

    public getPetName = () => {
        return this.pet_name
    };

    public getPetWalkId = () => {
        return this.pet_walk_id
    };
}