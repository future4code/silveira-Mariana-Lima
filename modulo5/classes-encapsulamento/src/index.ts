/// Exercício 1

///a) Ele serve pra inicializar a classe, chamamos pela sintaxe "constructor" como um type.

/// b) uma vez só.

// type Transaction = {
//     description: string,
//     value: number,
//     date: string
//   }
  
  class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    public getCpf(): string {
        return this.cpf;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public getBalance(): number {  
        return this.balance;
    }

    public getTransactions(){
        return this.transactions;
    }

    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }

  let mariana = new UserAccount("123.456.789-10", "Mariana", 25);

  console.log(mariana);

///c) Em uma função get.

/// Exercício 2

class Transaction {
    private description: string;
    private value: number;
    private date: string;
  
    getDescription() {
      return this.description;
    }
  
    getValue() {
      return this.value;
    }
  
    getDate() {
      return this.date;
    }
  
    constructor(description: string, value: number, date: string) {
      this.description = description;
      this.value = value;
      this.date = date;
    }
  }
  
  let marianaTrans: Transaction = new Transaction("Comprou uma casa", 50000000, "2022-08-24");
  

/// Exercício 3

class Bank {
    account: UserAccount[];

    constructor(account: UserAccount[]) {
      this.account = account;
    }
}