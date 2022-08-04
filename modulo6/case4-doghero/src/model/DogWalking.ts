import { CustomError } from "../error/CustomError";

export class DogWalking {
    constructor(
        private id: string,
        private status: string,
        private date: Date,
        private price: number,
        private latitude: number,
        private longitude: number,
        private duration: string,
        private start_date: string,
        private end_date: string
    ){}

    public getId = () => {
        return this.id
    };

    public getStatus = () => {
        return this.status
    };

    public getDate = () => {
        return this.date
    };

    public getPrice = () => {
        return this.price
    };

    public getLatitude = () => {
        return this.latitude
    };

    public getLongitude = () => {
        return this.longitude
    };

    public getDuration = () => {
        return this.duration
    };

    public getStartDate = () => {
        return this.start_date
    };

    public getEndDate = () => {
        return this.end_date
    };

    static StatusRole(input: string): STATUS_ROLES{
        switch (input) {
            case "Do":
                return STATUS_ROLES.DO;
            case "DO":
                return STATUS_ROLES.DO;
            case "do":
                return STATUS_ROLES.DO;
            case "Doing":
                return STATUS_ROLES.DOING;
            case "doing":
                return STATUS_ROLES.DOING;
            case "DOING":
                return STATUS_ROLES.DOING;
            case "Done":
                return STATUS_ROLES.DONE;
            case "done":
                return STATUS_ROLES.DONE;
            case "DONE":
                return STATUS_ROLES.DONE;
            default:
            throw new Error("Invalid status");
        }
    }
};

export enum STATUS_ROLES {
    DO = "Do",
    DOING = "Doing",
    DONE = "Done"
 };

 

export const PriceCalculator =(duration: string, pets: number):number => {
    switch (duration) {
        case "30":
            return 25 + (pets - 1)* 15 ;
        case "60":
            return 35 + (pets - 1)* 15;
        default:
            throw new CustomError (422, "Fill in the time with the options of 30 or 60 minutes.")
    }
};