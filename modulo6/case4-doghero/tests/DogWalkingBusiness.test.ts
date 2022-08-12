import { DogWalkingInputMockDTO } from './../src/types/DTO/DogWalkingInputDTO';
import { IdGenerator } from './../src/services/IdGenerator';
import { DogWalkingDatabase } from '../src/data/DogWalkingDatabase';
import { DogWalkingBusiness } from './../src/business/DogWlkingBusiness';
import { CustomError } from '../src/error/CustomError';

const dogWalkingBusinessMock = new DogWalkingBusiness(
    new DogWalkingDatabase(),
    new IdGenerator(),
);

describe("Walking Tests", () => {
    test("Date field is empty", async () => {
        try{
            const inputMock: DogWalkingInputMockDTO = {
                id: "id_d",
                date: "",
                duration: "30",
                latitude: 12.34567,
                longitude: 12.34567,
                pets: 2,
                start_time: "10:00",
                end_time: "10:30",
            };

            await dogWalkingBusinessMock.insertWalking(inputMock)
        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("The date input is empty");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test("Duration field is empty", async () => {
        try{
            const inputMock: DogWalkingInputMockDTO = {
                id: "id_d",
                date: "12/08/2022",
                duration: "",
                latitude: 12.34567,
                longitude: 12.34567,
                pets: 2,
                start_time: "10:00",
                end_time: "10:30",
            };

            await dogWalkingBusinessMock.insertWalking(inputMock)
        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("Fill in the time with the options of 30 or 60 minutes.");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test("Latitude field is empty", async () => {
        try{
            const inputMock: DogWalkingInputMockDTO = {
                id: "id_d",
                date: "12/08/2022",
                duration: "30",
                latitude: 0,
                longitude: 12.34567,
                pets: 2,
                start_time: "10:00",
                end_time: "10:30",
            };

            await dogWalkingBusinessMock.insertWalking(inputMock)
        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("The latitude input is empty");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test("Longitude field is empty", async () => {
        try{
            const inputMock: DogWalkingInputMockDTO = {
                id: "id_d",
                date: "12/08/2022",
                duration: "30",
                latitude: 12.34567,
                longitude: 0,
                pets: 2,
                start_time: "10:00",
                end_time: "10:30",
            };

            await dogWalkingBusinessMock.insertWalking(inputMock)
        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("The longitude input is empty");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test("Pets field is empty", async () => {
        try{
            const inputMock: DogWalkingInputMockDTO = {
                id: "id_d",
                date: "12/08/2022",
                duration: "30",
                latitude: 12.34567,
                longitude: 12.34567,
                pets: 0,
                start_time: "10:00",
                end_time: "10:30",
            };

            await dogWalkingBusinessMock.insertWalking(inputMock)
        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("The pets input is empty");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test("Start field is empty", async () => {
        try{
            const inputMock: DogWalkingInputMockDTO = {
                id: "id_d",
                date: "12/08/2022",
                duration: "30",
                latitude: 12.34567,
                longitude: 12.34567,
                pets: 2,
                start_time: "",
                end_time: "10:30",
            };

            await dogWalkingBusinessMock.insertWalking(inputMock)
        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("The start date input is empty");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test("End field is empty", async () => {
        try{
            const inputMock: DogWalkingInputMockDTO = {
                id: "id_d",
                date: "12/08/2022",
                duration: "30",
                latitude: 12.34567,
                longitude: 12.34567,
                pets: 2,
                start_time: "10:00",
                end_time: "",
            };

            await dogWalkingBusinessMock.insertWalking(inputMock)
        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("The end date input is empty");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test("Walking successfully", async () => {
        try{
            const inputMock: DogWalkingInputMockDTO = {
                id: "id_d",
                date: "12/08/2022",
                duration: "30",
                latitude: 12.34567,
                longitude: 12.34567,
                pets: 2,
                start_time: "10:00",
                end_time: "10:30",
            };

            await dogWalkingBusinessMock.insertWalking(inputMock)
        }catch (error) {
            if (error instanceof CustomError) {
            }
        }
    });
})