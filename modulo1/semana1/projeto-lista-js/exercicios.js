// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let mensagemDeAltura = +prompt("Qual é a altura?")
let mensagemDeLargura = +prompt("Qual é a largura?")
let area = mensagemDeAltura * mensagemDeLargura
console.log (area)
  
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let mensagemDeAnoAtual = +prompt("Qual ano estamos");
  let mensagemDeNascimento = +prompt("Qual é o ano que você nasceu?");
  let idade = mensagemDeAnoAtual - mensagemDeNascimento;
  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return peso / (altura * altura);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
let nome = prompt("Qual é o seu nome?");
let suaIdade = +prompt("Qual é a sua idade?");
let email = prompt("Qual é seu e-mail?");
console.log(`Meu nome é ${nome}, tenho ${suaIdade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let primeiraCor = prompt("diga uma cor favorita")
let segundaCor = prompt("diga uma segunda cor favorita")
let terceiraCor = prompt("diga uma terceira cor favorita")
let listaDeCores = [primeiraCor, segundaCor, terceiraCor]
console.log(listaDeCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
let maiuscula = string.toUpperCase()
 return maiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return  string1.length === string2.length


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
const primeiroItem = array[0]
return primeiroItem

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let array2 = array[0]
  array[0] = array[array.length -1]
  array[array.length -1] = array2
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
let checa = string1.toLowerCase() === string2.toLowerCase()
return checa
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let mensagemDeAnoAtual1 = +prompt("Qual ano estamos");
  let mensagemDeNascimento1 = +prompt("Qual é o ano que você nasceu?");
  let mensagemDeRg = +prompt("Qual é o ano da emissão da identidade?")
  let idade1 = mensagemDeAnoAtual1 - mensagemDeNascimento1
  let diferenca = mensagemDeAnoAtual1 - mensagemDeRg

  let renova = (idade1 <= 20 && diferenca >= 5)
  let renova1 = (idade1 > 20 && idade1 <= 50 && diferenca >= 10)
  let renova2 = (idade1 > 50 && diferenca >= 15)
  
  console.log(renova || renova1 || renova2)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
let bissexto 
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}