## Exercício 1

a) Liga uma tabela com a outra, interligando através de referencia.

b)
```INSERT INTO Rating VALUES(```
 ```"002", "COMENTARIO DO FILME TROPA DE ELITE" ``` 
 ```10, "004");```

c) Não pode criar por causa do "FOREIGN KEY", não consegue conectar com aquele id

d)
```ALTER TABLE Movies ``` 
``` DROP COLUMN Rating;``` 

e) Nãp pode excluir por causa da ligação da "FOREIGN KEY".

## Exercício 2

a) essa tabela serve para ligar a tabela de filmes com a tabela de atores.

b)
```INSERT INTO MovieCast VALUES(```
``` "001","002"```
```),("002","003"),("003","004");```

c) Dá erro pq aquele id é inexistente, não tem como fazer a ligação.

d) Não permite excluir por causa do "FOREIGN KEY".

## Exercício 3

a) "ON" refenciar uma condição.

b)
```SELECT Movies.id, name, rate FROM Movies ```
```JOIN Rating ON Movies.id = Rating.movie_id;```

## DESAFIO

## Exercício 4

a) 
```SELECT Movies.id, name, rate, comment FROM Movies ```
```JOIN Rating ON Movies.id = Rating.movie_id;```