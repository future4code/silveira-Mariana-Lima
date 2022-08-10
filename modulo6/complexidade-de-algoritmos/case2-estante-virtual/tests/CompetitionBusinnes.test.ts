import { CompetitionDatabase } from './../src/data/CompetitionDatabase';
import { CompetitionBusiness } from './../src/business/CompetitionBussines';
import { IdGenerator } from '../src/services/IdGenerator';
import { CompetitionMockDTO } from '../src/types/DTO/CompetitionDTO';
import { CustomError } from '../src/error/CustomError';
import { UpdateStatusDTO } from '../src/types/DTO/UpdateStatusDTO';

const CompetitionBusinessMock = new CompetitionBusiness(
    new CompetitionDatabase(),
    new IdGenerator()
)

describe("Competition tests", () => {
    test("Name field is empty.", async () => {
        try {
            const inputMock: CompetitionMockDTO= {
                id: "id_c",
                name: "",
                date: "28/07/2022",
                status: "Open"
            };

            await CompetitionBusinessMock.register(inputMock)

        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("Please fill in all fields.");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test("Date field is empty.", async () => {
        try {
            const inputMock: CompetitionMockDTO= {
                id: "id_c",
                name: "nome",
                date: "",
                status: "Open"
            };

            await CompetitionBusinessMock.register(inputMock)

        }catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("Please fill in all fields.");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test("Create Competition.", async () => {
        try {
            const inputMock: CompetitionMockDTO= {
                id: "id_c",
                name: "nome",
                date: "28/07/2022",
                status: "Open"
            };

            await CompetitionBusinessMock.register(inputMock)

        }catch (error) {
            if (error instanceof CustomError) {
            }
        }
    });
});

describe("Update competition test", () => {
    test("Id field isn't filled.", async () => {
        try {
            const inputMock: UpdateStatusDTO = {
              id: "",
              status: "open",
            };
      
            await CompetitionBusinessMock.updateStatus(inputMock);
          
        } catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("Please fill in all fields.");
              expect(error.statusCode).toEqual(422);
            }
        }
    });
      
    test("Status field isn't filled.", async () => {
        try {
            const inputMock: UpdateStatusDTO = {
              id: "mocked_id",
              status: "",
            };
      
            await CompetitionBusinessMock.updateStatus(inputMock);
          
        } catch (error) {
            if (error instanceof CustomError) {
              expect(error.message).toEqual("Please fill in all fields.");
              expect(error.statusCode).toEqual(422);
            }
        }
    });

    test("Should update a competition status.", async () => {
        expect.assertions;
        try {
          const inputMock: UpdateStatusDTO = {
            id: "mocked_id",
            status: "open",
          };
    
          await CompetitionBusinessMock.updateStatus(inputMock);
          expect(CompetitionBusinessMock.updateStatus).toBeCalled()
        } catch (error) {
          if (error instanceof CustomError) {
            console.log(error)
          }
        }
      });
});