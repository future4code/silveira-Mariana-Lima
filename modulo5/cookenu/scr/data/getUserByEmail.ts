import { connection } from "../connection";

export const getUserByEmail = async(email: string) => {
    const response = await connection("cookenu_user")
    .where({email: email});
    return response[0]
}