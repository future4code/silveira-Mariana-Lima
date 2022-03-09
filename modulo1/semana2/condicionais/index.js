// Exercícios de interpretação
/*1-a) O codigo pede para o usuário diga um número, depois convertemos o string para Number, no if o número do usuário dividi com 2 e o resto tem q ser igual a 0. Se for o resto for 0, o resultado vai ser ("Passou no teste."), se o resultado não dê o resto 0 vai ser ("Não passou no teste.")
b) Números pares.
c) Números impares.

2-a) Codigo serve para fazer uma tabela de fruta e seus preços.
b)"O preço da fruta ", maça, " é ", "R$ ",2.25)
c) O preço da perâ vai ser 5, pq break só vai parar na ultima linha, amostrando o preço do default.

3-a) Pede ao usuário a digita um número.
b) Número 10: A mensagem exibida vai ser "Esse número passou no teste"
Número - 10: Não imprimir nenhuma mensagem
c) O erro que dá é sé coloca numeros negativos, ele não consegue resolver a comparação de >
*/

// Exercício de escrita
//1-a)
/*const idade = prompt("Qual é a sua idade?")
//1-b)
const numero = Number(idade)
//1-c)
if (numero >= 18){
    console.log("Você pode dirigir")
} else{
    console.log("Não pode dirigir")
}
*/

//2)
/*const horario = prompt("Qual turno você estuda?(M = Matutino V = Vespertino N = Noturno)");

if(horario.toUpperCase() === "M"){
    console.log("Bom dia!")
} else if(horario.toUpperCase() === "V"){
    console.log("Boa tarde!")
} else if(horario.toUpperCase() === "N"){
        console.log("Boa noite!")
    }else{
        console.log("Tente coloca uma das 3 letras (M,V OU N)")
    }
*/

//3)
/*const horario = prompt("Qual turno você estuda?(M = Matutino V = Vespertino N = Noturno)");

switch (horario.toUpperCase()){
    case 'M':
        console.log("Bom dia!")
        break
    case 'V':
        console.log("Boa tarde!")
        break
    case 'N':
        console.log("Boa noite!")
        break
        default:
            console.log("Tente coloca uma das 3 letras (M,V OU N)")
            break
}
*/

//4)
/*const genero = prompt("Qual é o gênero do filme que vão assitir?");
const preco = +prompt("Qual é o preço do ingresso?");

function assistirFilme(genero,preco) {
if (genero === "fantasia" && preco <= 15){
    console.log("BOM FILME!");
}else{
    console.log("Escolha outro filme");
}
}
const resultado = assistirFilme(genero,preco)*/

//DESAFIO

//1)
/*
const genero = prompt("Qual é o gênero do filme que vão assitir?");
const preco = +prompt("Qual é o preço do ingresso?");

function assistirFilme(genero,preco) {
if (genero === 'fantasia' && preco < 15) {
    let lanche = prompt("Qual snack que você quer comprar?");
    console.log(`Bom filme!`);
    console.log(`Aproveite o seu ${lanche}`);
}else {
    console.log("Escolha outro filme");
}
}
const resultado = assistirFilme(genero,preco);*/

//2)

const nomeCompleto = prompt("Qual é o seu nome completo?");
const tipoJogo = prompt("Qual tipo de jogo q você quer? (IN = Internacional || DO = Doméstico)");
const etapaDoJogo = prompt("Qual é a etapa do jogo? (SF = Semi-final || DT = Terceiro lugar || FI = Final)");
const categoria = +prompt("Qual categoria? (1 || 2 || 3 || 4)");
const quantidadeDeIngressos = +prompt("Quantidade de ingressos?")

const valorDoIngresso = [
    {tipoDoJogo: "SF",
    categoria1: 1320,
    categoria2: 880,
    categoria3: 550,
    categoria4: 220},
    {tipoDoJogo: "DT",
    categoria1: 660,
    categoria2: 440,
    categoria3: 330,
    categoria4: 170},
    {tipoDoJogo: "FI",
    categoria1: 1980,
    categoria2: 1320,
    categoria3: 880,
    categoria4: 330},
]

