// O seguinte `array` traz as pessoas colaboradoras de uma empresa, com seus salários, 
// setores e se trabalham presencialmente ou por home office:

// [
// 	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
// 	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
// 	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
// 	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
// 	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
// 	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
// 	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
// ]

// Considerando o arrayacima, crie um ENUM para os setores e um type para as pessoas colaboradoras. 
// Em seguida, crie uma função que receba este arraycomo parâmetro e retorne apenas as pessoas do setor de marketing 
// que trabalham presencialmente. 

enum setores {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO ="financeiro"
}

type Funcionarios = {
    nome: string,
    salário: number,
    setor: setores.FINANCEIRO | setores.MARKETING | setores.VENDAS
    presencial: boolean
}

const listaDeFuncionarios: Funcionarios[] = [
	{ nome: "Marcos", salário: 2500, setor: setores.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: setores.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: setores.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: setores.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: setores.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: setores.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: setores.MARKETING, presencial: true }
]

function marketing(Funcionario: Funcionarios[]):Funcionarios[] {
   return listaDeFuncionarios.filter((item)=> {
   return item.setor === setores.MARKETING && item.presencial
   })
}

console.log(marketing(listaDeFuncionarios))