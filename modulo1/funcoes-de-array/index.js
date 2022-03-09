//Exercícios de interpretação
/**1-a)Vai imprimir a array toda. nome e o apelido.
 * 2-a)Vai imprimir só os nomes do item. 
 * 3-a) Tudo que não for Chijo vai ser impresso como: "Mandi" e "Laura".
 */

//Exercícios de escrita
//1)
/*
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
*/
//1-a)
/*
  const array = pets.map((item, index, array) => {
      console.log(item.nome)   
  })
  */
//1-b)
/*
const array = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})

console.log(array)
*/
//1-c)
/*
const array = pets.filter((item, index, array) => {
    const poodle = item.raca === "Poodle"
    return poodle
}).map((item, index, array) => {
    const cupom = `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
    return cupom
})

console.log(array)
*/

//2
/*
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
*/
//a)
/*
const array = produtos.map((item, index, array) => {
    console.log(item.nome)  
})
*/

//b)
/*
const array = produtos.map((item, index, array) => {
    const novoPrecos = {nome: item.nome, preco : item.preco-(item.preco*5/100)}
    return novoPrecos
})
 console.log(array)
*/
//c)
/*
const array = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})
console.log(array)
*/
//d)
/*
const array = produtos.filter((item, index, array) => {
    const ype = item.nome.includes("Ypê")
    return ype
})
console.log(array)
*/
//e)
/*
const array = produtos.filter((item, index, array) => {
    const ype = item.nome.includes("Ypê")
    return ype
}).map((item,index,array)=> {
    frase1 = `Compre ${item.nome} por ${item.preco}`
    return frase1 
})
console.log(array)
*/
