
### Exercício 1
 A) O Varchar(n) recebe uma string de maxino "n" caracteres. date representa uma data.
 Primary Key possui um identificador único e NOT NULL não pode vim vazio.

 B) "SHOW DATABASE" entrega uma tabela que tem meu registro no SQL e o "SHOW TABLES" entrega uma tabela de tabelas criada por mim.

 C) Entrega os detalhes da tabela.


```
CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;
SHOW TABLES;


DESCRIBE Actor;
```

## Exercício 2
 B) Duplicado entrada '002' para chave 'PRIMARY', que não pode ter o mesmo string. 
 C) A contagem de colunas não contagem de valor de correspondência na linha
 D) O campo 'name' não possui um valor padrão
 E) Valor de data incorreto : '1950' para a coluna 'birth_date', o valor da birth_date não está em aspa.

```
INSERT INTO Actor (id,name,salary, birth_date, gender)
VALUES("001","Tony Ramos", 400000, "1948-08-25", "male");

INSERT INTO Actor (id,name,salary, birth_date, gender)
VALUES("002","Glória Pires", 1200000, "1963-08-23", "famale");

INSERT INTO Actor (id,name,salary, birth_date, gender)
VALUES("002","Nicette Bruno", 4000000, "1933-01-07", "famale");

INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

F)

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Tarcísio Meira",
   100000,
  "1935-10-05", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Glorá Menezes",
  200000,
  "1934-10-19", 
  "female"
);
```

##Exercício 3
A)
```
SELECT id, name from Actor WHERE gender = "female";
```
B)
```
SELECT id, name, salary from Actor WHERE name = "Tony Ramos";
```
C)
```
SELECT id, name from Actor WHERE gender = "invalid";
```
Não teve retorno, por que  não tem nenhum gender = "invalid"

D) 
```
SELECT id, name, salary from Actor WHERE salary < 500000;
```
E) 
```
SELECT id, nome from Actor WHERE id = "002";
```

Está escrito como "nome", o certo é "name" 

```
SELECT id, name from Actor WHERE id = "002";
```

## Exercício 4

A)
```
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
```

"Like" faz uma comparação para ver nomes q comeca com A e J e ver se tem salario acima de 300000.

B)
```
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
```
C)
```
SELECT * FROM Actor
WHERE name LIKE "%G%" OR "%g%";

SELECT * FROM Actor
WHERE (name LIKE "%A%" OR "%a%" OR "%G%" OR "%g%") AND salary BETWEEN 350000 AND 900000;
```
##EXERCICIO 5

A) O valor TEXT serve para armazenar uma string de até 2GB de tamanho. Essa query se trata de uma table que armazena info de filmes.

```
CREATE TABLE Movies (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    synopse TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);

INSERT INTO Movies ( id, name, synopse, release_date, rating)
VALUE ("001", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-06-01", 7);

INSERT INTO Movies ( id, name, synopse, release_date, rating)
VALUE ("002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10);

INSERT INTO Movies ( id, name, synopse, release_date, rating)
VALUE ("003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8);

INSERT INTO Movies ( id, name, synopse, release_date, rating)
VALUE ("004", "Tropa de Elite", "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano.Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar.", "2007-10-05", 9);
```

##Exercício 6

A)
```
SELECT id, name, rating from Movies WHERE id = "001";
```

B) 
```
SELECT id, name FROM Movies WHERE name = "se eu fosse você";
```

C)
```
SELECT id, name, synopse FROM Movies WHERE rating >= 7;
```

##EXERCÍCIO 7

A)
```
SELECT * FROM Movies
WHERE name LIKE "%VIDA%";
```

B)
```
SELECT * FROM Movies
WHERE name LIKE "%VOCÊ%" OR synopse LIKE "%ANOS%";
```

C)
```
SELECT * FROM Movies
WHERE name LIKE "%ELITE%";

SELECT * FROM Movies
WHERE name LIKE "%MÃE%";

SELECT * FROM Movies
WHERE name LIKE "%FLOR%";
```
## D)
```
SELECT * FROM Movies
WHERE release_date < CURDATE AND 
      (name LIKE "%você%" OR
      synopse LIKE "%você%") AND rating > 7;
```