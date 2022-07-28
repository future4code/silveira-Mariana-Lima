import { CompetitionMockDTO } from "../../src/types/DTO/CompetitionDTO";
import { CompetitionClosenMock, CompetitionOpenMock } from "./CompetitionMocks";

export class CompetitionDatabaseMock {
    public async register(competitiom: CompetitionMockDTO): Promise<void>{

    };

    public async getCompetitionById(id: string): Promise<CompetitionMockDTO | undefined> {
        switch(id) {
            case "id_c":
                return CompetitionOpenMock
            case "id_c2":
                return CompetitionClosenMock
            default: 
                return undefined
        }
    };

    public async updateStatus(id: string): Promise<void> {
        
    }
}