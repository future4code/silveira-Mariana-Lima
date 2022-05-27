// Crie um função que receba uma string com o nome e outra string com uma data de nascimento (ex.: “24/04/1993”). 
// A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato: 
// "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 

function pessoa (nome: string, dataDeNascimento: string): string{
    const separar: string[] = dataDeNascimento.split("/");
    return `Olá me chamo ${nome}, nasci no dia ${separar[0]} do mês de ${separar[1]} do ano de ${separar[2]} `;
}

console.log(pessoa("Mariana", "24/02/1997"));