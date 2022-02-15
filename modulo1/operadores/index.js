/** Exercício interpretação
 * 1) Console vai impremir essa sequencia "false, false, true e bololeans".
 * Primeira impressão no console bool1 é true e bool2 é false, precisamos de 2 true na variveis para ser true
 * Segunda  impressão no console bool1 é true, bool2 é false e bool3 é true, precisamos q todos sejam true.
 * Terceira impressão no console !resultado (ultimo resultado é false com ! a negação) é true e bool1 que é true ou bool2 que é false, fica true && (true || false), resultado fica true.
 * Quarta impressão é o tipo da variavel. que é Booleans. 
 * 2) Esqueceu de colocar "+" ou "Number" antes do 
 * "promt" e no console vai sair como string.
 * 3) Iria sugerir coloca o "+" ou "Number"
 */


/**Exercício 1 */

let suaIdade =+prompt("Qual é a sua idade?");
let idadeDeMelhorAmigo =+prompt("Qual é a idade do seu melhor amigo");

console.log ("Sua idade é maior do que a do seu melhor amigo?", suaIdade > idadeDeMelhorAmigo);
console.log (suaIdade - idadeDeMelhorAmigo);

/**Exercício 2 */

let numeroPar = +prompt ("Insira um número par");

console.log (numeroPar / 2);

/** c) Números pares dividos por 2, sempre são numeros inteiros.
 * d) Inserir numeros ímpares, o valor e sempre nuemora decimais.
 */

/** Exercício 3 */

let idade = +prompt("Quantos anos você tem?");

console.log ("A idade do usuário em meses é", idade * 48);
console.log ("A idade do usuário em dias é", idade * 365);
console.log ("A idade do usuário em dias é", idade * 8766);

/** Exercício 4 */

let numero1 = +prompt (" Insira um número");
let numero2 = +prompt (" Insira outro número");

console.log("o primeiro número é maior que o segundo", numero1 > numero2);
console.log("o primeiro número é igual ao segundo", numero1 === numero2);

let resultado = numero1 / numero2 === 0
let resultado2 = numero2 / numero1 === 0 

console.log("o primeiro número é divisível pelo segundo",resultado);
console.log("o segundo número é divisível pelo primeiro", resultado2);