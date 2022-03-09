//Exercícios de interpretação de código

/**1) O código diz que o valor é igual a 0, depois diz q inicia o 'i' com 0 e vai ate '4' ultimo número abaixo de 5, somando o valor de "i". No console o valor final vai 10  
 * 2)a)Vai ser impresso ("21","23","25","27","30"). 
 * b)Sim, adaptando o comando para ver o indice seria:
 * 
 * 3)Vai ser impresso: "*","**","***","****".
*/
 
//Exercícios de escrita de código

//1)
 
const bichinhos = +prompt("Quantos bichinhos de estimação você tem?");
const nome = []

//a)
if (bichinhos === 0) {
console.log("Que pena! Você pode adotar um pet!")

//b)

} else if (bichinhos > 0) {
    for (let i = 1; i <= bichinhos; i = i + 1) {    
       const nomes = prompt (`Qual é o nome do seu bichinho${i}?`);
       nome.push(nomes)
    } 

//c)
 console.log(nome);
}

//2

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];


