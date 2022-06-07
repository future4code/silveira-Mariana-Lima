## Exercício 1

a) ```ALTER TABLE Actor DROP COLUMN salary;```
DROP COLUMN remove uma coluna, que seria a coluna "salary".

b) ```ALTER TABLE Actor CHANGE gender sex VARCHAR(6);```
CHANGE vai renomar a coluna "gender" para "sex"

c) ```ALTER TABLE Actor CHANGE gender gender VARCHAR(255);```
CHANGE vai redeclarar a coluna "gender"

d) ```ALTER TABLE Actor CHANGE gender gender VARCHAR(100);```

## Exercício 2

a) ``` UPDATE Actor  ```
```SET  ```
```name = "Moacyr Franco", ```
```birth_date = "1960-12-05" ```
```WHERE id = "003";```

b) ```UPDATE Actor ```
```SET ```
```name = "JULIANA PAES" ```
```WHERE name = "Juliana Paes"; ```

c) ```UPDATE Actor ```
```SET ```
```name = "Moacry Franco", ```
```birth_date = "2020-02-10", ```
``` salary = 600000, ```
``` gender = "male" ```
``` WHERE di = "005"; ```

d) Validou o codigo, mas não alterou nenhum linha no codigo.

## Exercício 3

a) ``` DELETE FROM Actor WHERE name =  " Fernanda Montenegro"; ```

b) ``` DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;```

## Exercício 4

a) ``` SELECT MAX(salary) FROM Actor;```
b) ``` SELECT MIN(salary) FROM Actor WHERE gender = "female"; ```
c) ``` SELECT COUNT(*) FROM Actor WHERE gender = "female"; ```
d)``` SELECT SUM(salary) from Actor; ```

## Exercício 5
a) ```SELECT COUNT(*), gender```
```FROM Actor```
```GROUP BY gender```
Query retorna a quantidade cada elemento da tabela.

b) ``` SELECT id, name FROM Actor ORDER BY name DESC; ```

c) ```SELECT * FROM Actor ORDER BY salary ```

d) ```SELECT * FROM Actor ORDER BY salary DESC LIMIT 3; ```

e) ```SELECT AVG(SALARY), gender```
```FROM Actor```
```GROUP BY gender ```

## Exercício 6

a) ``` ALTER TABLE Movies ADD playing_limit_date VARCHAR(255); ```

b) ``` ALTER TABLE Movies CHANGE rating rating FLOAT; ```

c) ``` UPDATE Movie SET playing_limit_date = "2020-12-31" WHERE id = "001"; ```

```UPDATE Movies SET playing_limit_date = CURDATE() WHERE id = "002"; ```

d) ``` DELETE FROM Movie WHERE ID = "001;"```

## DESAFIO

## Exercício 7

a) ``` SELECT COUNT(*) FROM Movies WHERE ratiang > 7.5;```

b) ``` SELECT AVG(ratiang) FROM Movies; ```

c) ``` SELECT COUNT(*) Movies WHERE playing_limit_time >= CURDATE();  ```

d) ``` SELECT COUNT(*) Movies WHERE playing_limit_time > CURDATE();  ```

e) ``` SELECT MAX(rating) FROM Movies LIMIT 1;```

f) ``` SELECT MIN(rating) FROM Movies LIMIT 1```

## Exercício 8

) ``` SELECT * FROM Movies ORDER BY name; ```

) ``` SELECT * FROM Movies ORDER BY name DESC LIMIT 5; ```

) ``` SELECT * FROM Movies WHERE release_date < CURDARTE() ORDER BY realease_date DESC LIMIT 3; ```

) ``` SELECT * FROM Movies ORDER BY RATING DESC LIMIT 3 ;```