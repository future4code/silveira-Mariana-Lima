export class PetsTour {
    constructor(
        private id: string,
        private pet_id: string,
        private tour_id: string 
    ){}

    public getId = () => {
        return this.id
    };

    public getPetId = () => {
        return this.pet_id
    };

    public getTourId = () => {
        return this.tour_id
    };
}