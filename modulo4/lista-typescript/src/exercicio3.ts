// Você foi contratado por um serviço de streaming para organizar o sistema de catálogos de filmes. 
// Cada filme possui 3 informações essenciais: 1. nome do filme; 2. ano de lançamento e 3. gênero do filme. 
// Os gêneros da plataforma se limitam aqueles encontrados no seguinte ENUM de gêneros: 
// Além dessas informações presentes em todos os filmes, alguns deles possuem uma informação opcional: 
// 4. pontuação em site de resenha (ex. Metacritic, RotenTomatoes).
// Considerando todas estas informações, crie uma função que receba todas essas informações como parâmetros( 3 essenciais + 1 opcional) 
// e retorne todas informações organizadas em um `type`


enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Info = {
	nome: string,
	ano: number,
	genero: GENERO.ACAO | GENERO.COMEDIA | GENERO.DRAMA | GENERO.ROMANCE | GENERO.TERROR,
	pontuacao?: number
}

const filme:Info = {
	nome: "Duna",
	ano: 2021,
	genero: GENERO.ACAO,
	pontuacao: 74
}

function informacao (nome: string, ano: number, genero: GENERO , pontuacao?: number):Info {
    return {
		nome: nome, 
		ano: ano, 
		genero: genero, 
		pontuacao: pontuacao
}
}

console.log(informacao(filme.nome, filme.ano, filme.genero, filme.pontuacao))