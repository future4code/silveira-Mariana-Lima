// Exercício de interpretação
// 1-a) Vai ser impresso no console, "Matheus Nachtergaele", "Virginia Cavendish" e "Globo 14h"
// 2-a) Vai ser impresso no console, Cachorro: (juca, 3 e SRD). Gato (Juba, 3 e SRC) e a Tartaruga (Jubo, 3 e SRC)
// 2-b) Os 3 pontos significa copiar o objeto escolhido que vem depois dos pontos.
// 3-a) Foi impresso "false" e "underfined".
// 3-b) No primeiro console, pede o "backender" que no objeto está como "false" e o segundo console esta pedindo "altura", q não tem nenhuma informação sobre altura. Por isso, "underfined".


// Exercício de interpretação
// 1-a)
/*
const pessoa = {
    nome:"Mariana",
    apelidos:["Mari", "Nana","Coisinha"]
}

function imprimir(objeto){
return `Eu sou ${objeto.nome}, mas pode me chamar de ${objeto.apelidos} .`
}

const novoApelido = {...pessoa,apelidos:['Marianinha', 'Nananinha','BB']}

console.log(imprimir(novoApelido))
*/
//2-a)

/*const pessoa1 = {
    nome: "Mariana",
    idade: "24",
    profissao: "Aluna"
}

const pessoa2 = {
    nome: "Maria",
    idade: "25",
    profissao: "Instrutora"
}

function array(pessoa){
    let nome = pessoa.nome
    let numerosDoNome = pessoa.nome.length
    let idade = pessoa.idade
    let profissao = pessoa.profissao
    let numerosDaProfissão = pessoa.profissao.length
    let tudo = [nome, numerosDoNome, idade, profissao, numerosDaProfissão]
console.log(tudo)
}

array(pessoa1)
array(pessoa2)*/

//3-a)

/*const carrinho = []

//3-b)
 
const fruta = {
    nome: "morango",
    disponibilidade: true
}

const fruta1 = {
    nome: "banana",
    disponibilidade: true
}

const fruta2 = {
    nome: "maça",
    disponibilidade: true
}

//3-c)

function frutasNoCarrinho(fruta3){
    return carrinho.push(fruta3)
}

frutasNoCarrinho(fruta)
frutasNoCarrinho(fruta1)
frutasNoCarrinho(fruta2)

//3-d)

console.log(carrinho)*/

// DESAFIO

// 1)
/*
let nome1 = prompt("Qual é o seu nome")
let idade1 = +prompt("Qual é a sua idade?")
let profissao1 = prompt("Qual é a sua profissão?")
let objetos ={
    nome: nome1,
    idade: idade1,
    profissao: profissao1
}

console.log(objetos)
console.log(typeof objetos)
*/
//2)
/*
const filme = {
    nome: "Vingadores", 
    ano: 2012,
}

const filme1 = { 
nome: "Vingadores: Era de Ultron", 
ano: 2015
}

function anoFilmes(objeto1, objeto2) {
    console.log(`O primeiro filme foi lançado antes do segundo? ${objeto1.ano < objeto2.ano} `)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${objeto1.ano === objeto2.ano}`)
}

anoFilmes(filme, filme1)*/
