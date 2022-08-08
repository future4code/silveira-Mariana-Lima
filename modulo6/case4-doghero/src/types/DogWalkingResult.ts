import { STATUS_ROLES } from "../model/DogWalking"

export type DogWalkingResult = {
    id: string,
    status: STATUS_ROLES,
    date: string,
    price: number,
    duration: number,
    latitude: number,
    longitude: number,
    start_time: string,
    end_time: string
}