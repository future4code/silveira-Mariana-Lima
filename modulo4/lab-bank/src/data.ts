export type Extract = { 
    value: number, 
    date: number | string, 
    description: string
}

export type User = {
    name: string,
    birthDate: number | string,
    cpf: string,
    balance: number,
    extract: Extract[]
}

export let user: User[] = [
    {
        name: "Mariana Mendes",
        birthDate: "24/02/1997",
        cpf: "61465139540",
        balance: 0,
        extract: [
            {
                value: 200000,
                date: "03/06/2022",
                description: "Comprei uma casa"
            }
        ]
    },
    {
        name: "Mayara Mendes",
        birthDate: "11/04/1993",
        cpf: "61465139550",
        balance: 0,
        extract: [
            {
                value: 20000,
                date: "03/06/2022",
                description: "Reformei a casa"
            }
        ]
    },
    {
        name: "Maria do Carmo Mendes",
        birthDate: "13/08/1971",
        cpf: "61465139530",
        balance: 0,
        extract: [
            {
                value: 500000,
                date: "03/06/2022",
                description: "Comprei um apartamento"
            }
        ]
    },
]