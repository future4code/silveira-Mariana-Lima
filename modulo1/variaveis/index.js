/** Resposta
Interpretação
1-5,10
2- 10,10,10
3 - let horas let dias

Escrita
1D - tipo impresso foi undefined, por está vazio.

1F - depois de coloca os valores, apareceu q string é o tipo das 2 variáveis 
 */

const nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");
let aluno = prompt("Você é aluno da Labenu?(sim ou não)");
let morar = prompt("Você morar em uma casa?(sim ou não)");
let bem = prompt("Você está bem?(sim ou não)");

console.log(typeof nome);
console.log(typeof idade);
console.log("Olá","meu nome é", nome, "e eu tenho", idade, "anos");
console.log("Você é aluno da Labenu? -", aluno);
console.log("Você morar em uma casa? -", morar);
console.log("Você está bem? -", bem);

let a = 10;
let b = 25;
let c;

c = a;
a = b;
b = c;

console.log("O novo valor de a é", a);
console.log("O novo valor de a é", b);