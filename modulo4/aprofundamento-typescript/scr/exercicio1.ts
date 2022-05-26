// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
// Resposta - o tipo number não pode ser atribuídoao tipo string.

// const minhaString: string = 24

// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?
// Resposta - Para criar uma variavel que aceite 2 tipos de valor, usamos union type (|)

const meuNumero: number | string = 24

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

type Person = {
    nome: string,
    idade: number,
    corFavorita: string 
}

const pessoa1: Person = {
    nome: "Mariana",
    idade: 25,
    corFavorita: "preto"
}

const pessoa2: Person = {
    nome: "Mayara",
    idade: 29,
    corFavorita: "Vermelho"
}

const pessoa3: Person = {
    nome: "Maria",
    idade: 51,
    corFavorita: "Branco"
}

console.table(pessoa1)

// d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso.