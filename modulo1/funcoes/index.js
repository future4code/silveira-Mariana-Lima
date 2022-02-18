// Exercício interpretação
// 1- 
//a) 10 e 20
//b) Não iria aparecer nada no console, mas o calculo iria funcionar

//2-
/** a) toLowerCase = transforma todas a string em minúsculo
 * includes = encontra determinada palavra e diz se é 'true' ou 'false'
 * b) 
 * I - true 
 * II - true
 * III - true
 */

// Exercício escrito
// 1 - a)

/*function imprimir(nome){

console.log(`Eu sou ${nome}, tenho 24 anos, moro em Recife e sou estudante.`)
}

imprimir("Mariana")
*/
// 1 - b)

/*function imprimir(nome,idade,lugar,profissão){
    console.log(`Eu sou ${nome},tenho ${idade} anos, moro em ${lugar} e sou ${profissão}.`)
}
imprimir("Mariana","24","Recife","aluna");
*/

// 2 - a

/*function somar(a, b){
    const soma = a + b
    return soma
}
const soma1 = somar(1, 2)
console.log(soma1)
*/

// 2 - b

/*function somar(a, b){
    const soma = a + b
    comparacao = a >= b
    return soma
}
const soma1 = somar(10, 2)
console.log(comparacao)
*/

//  2 - c

/*function par(a) {
    return (a % 2) == 0;
 };
 const soma1 = par(11)
 console.log(soma1);
${texto.toUpperCase()}*/

//  2 - d

/*function frase(texto) {
    console.log(`${texto.length},${texto.toUpperCase()}`);
 };
 
 frase('Eu gosto de cenoura');
*/

 // 3

/*let numero1 = +prompt("Insira um número")
let numero2 = +prompt("Insira outro número")

function somar(a, b){
    const soma = a + b
    return soma
}

const soma1 = somar(numero1, numero2)
console.log(`Soma: ${soma1}`)

function subtração(a, b){
    const diferença = a - b
    return diferença
}

const diferença1 = subtração(numero1, numero2)
console.log( `Diferença: ${diferença1}`)

function multiplicar(a, b){
    const multiplicação = a + b
    return multiplicação
}

const multiplicação1 = multiplicar(numero1, numero2)
console.log(`Multiplicação: ${multiplicação1}`)

function dividir(a, b){
    const divisão = a + b
    return divisão
}

const divisão1 = dividir(numero1, numero2)
console.log(`Divisão: ${divisão1}`)*/