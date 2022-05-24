// Exercício 1

// a) uma variável que receba process.argv[2]

// b)

const nome = process.argv[2]
const idade = +(process.argv[3])

console.log(`\u001b[34m Olá, ${nome}! Você tem ${idade} anos. `)

// //c)

const novaIdade = idade + 7

console.log(`\u001b[34m Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)

//Desafio
const mensagem = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`
if(process.argv[2] && +process.argv[3]){
    console.log(mensagem)
}else{
    console.log("\u001b[31m Esperava 2 parâmetros, so recebi um.")
}