function renovacao(): boolean {
    let anoDeNascimento: number =new Date(process.argv[2])
    let anoDeEmissao: number = new Date(process.argv[3])
    let anoAtual: number = new Date()

    let idade: number = anoAtual - anoDeNascimento
    let tempo: number = anoAtual - anoDeEmissao

    if (idade <= 20 && tempo >= 5){
        return true
    } else if (idade > 20 && idade <= 50 && tempo >= 10){
        return true
    }else if(idade > 50 && tempo >= 15) {
        return true
    } else {
        return false
    }
}

console.log(renovacao())