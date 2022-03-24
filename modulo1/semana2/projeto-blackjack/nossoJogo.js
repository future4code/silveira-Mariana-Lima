/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!");

if (confirm("Quer iniciar uma nova rodada?")){
   const cartaDoUsuario = comprarCarta();
   const cartaDoUsuario1 = comprarCarta();
   const cartaDoComputador = comprarCarta();
   const cartaDoComputador1 = comprarCarta();
   const somaDoUsuario = (cartaDoUsuario.valor + cartaDoUsuario1.valor);
   const somaDoComputador = (cartaDoComputador.valor + cartaDoComputador1.valor);
   console.log(`Cartas do usuario ${cartaDoUsuario.texto}, ${cartaDoUsuario1.texto} Pontuação: ${somaDoUsuario}`);
   console.log(`Cartas do computador ${cartaDoComputador.texto}, ${cartaDoComputador1.texto} pontuação: ${somaDoComputador}`);
if (somaDoComputador === somaDoUsuario){
console.log("Jogo Empatado")
} else if (somaDoComputador > somaDoUsuario){
   console.log("Computador venceu")
} else if (somaDoComputador < somaDoUsuario){
   console.log("Você venceu")
}
} else {
   console.log("Jogo Finalizado")
}

