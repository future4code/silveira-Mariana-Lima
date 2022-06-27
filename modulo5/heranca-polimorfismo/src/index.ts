// Herança

// Exercício 1

//a) Não, Password está privado
//b) 1 vez só

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string{
        return this.email
    }

    public getName(): string {
        return this.name
    }

    public interoduceYourself(): string {
        return `Olá, Bom dia. Sou ${this.name}`
    }
}

// let mariana: User = new User("1", "mariana@dev.com", "Mariana", "123456")

// console.log(mariana)

// Exercício 2

// a) uma vez
// b) duas vezes, Porque "Customer" é herdeira de "User"

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCrad: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe customer");
        this.creditCrad = creditCard
    }

    public getCreditCard(): string {
        return this.creditCrad;
    }
}

let mariana: Customer = new Customer("2", "mariana@dev.com", "Mariana", "123456","123456789")

console.log(mariana)

//Exercício 3

//a) Password stá em privado em "User", ainda não daria apara chamar.

// console.log(mariana.getCreditCard())
// console.log(mariana.getEmail())
// console.log(mariana.getId())
// console.log(mariana.getEmail())

// Exercício 4

// public introduceYourself(): string {
//     return `Olá, bom dia!!`
// }

// console.log(mariana.interoduceYourself())

// Exercício 5

// public introduceYourself(): string {
//     return `Olá, sou ${this,name}. Bom dia!!`
// }

// console.log(mariana.interoduceYourself())

// Polimorfismo

// Exercício 1

// a) Consegui imprimir todas.

export interface Client {
    name: string;
    registartionNumber: number;
    cosumedEnergy: number;
    calculateBill(): number
}

const client: Client = {
    name: "Mariana",
    registartionNumber: 1,
    cosumedEnergy: 3,
    calculateBill: () => {
        return 2
    }
}

console.log(client.calculateBill())
console.log(client.cosumedEnergy)
console.log(client.name)
console.log(client.registartionNumber)

// Exercício 2

