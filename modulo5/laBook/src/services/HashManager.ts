import * as bcrypt from "bcryptjs"

export class HashManager {
    createHash = async(password: string) => {
        const round = 12
        const salt = await bcrypt.genSalt(round)
        return bcrypt.hash(password, salt)
    }

    compare = (password: string, cypherText: string): Promise<boolean> => {
        return bcrypt.compare(password, cypherText)
    }
}