import { performPurchase } from "../src/testUser"
import { User } from "../src/type/User"


describe("Primeiro teste", () => {
    test("Verifica se o usuario fez compra", () => {
        const user:User = {
            name: "Mariana",
            balance: 1000
        }

        const result = performPurchase(user, 500)
        expect(result).toEqual({ name: "Mariana", balance: 500})
    })

    test("Verifica se o usuario fez compra", () => {
        const user:User = {
            name: "Mariana",
            balance: 1000
        }

        const result = performPurchase(user, 1000)
        expect(result).toEqual({ name: "Mariana", balance: 0})
    })
    
    test("Verifica se o usuario fez compra", () => {
        const user:User = {
            name: "Mariana",
            balance: 1000
        }

        const result = performPurchase(user, 500)
        expect(result).toEqual({ name: "Mariana", balance: 1100})
    })
})