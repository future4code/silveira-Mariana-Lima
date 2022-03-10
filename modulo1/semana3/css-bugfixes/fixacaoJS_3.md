function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  const peso1 = ex
  const peso2 = p1 * 2
  const peso3 = p2  * 3
  const media = (peso1 + peso2 + peso3)/6
  if(media >= 9){
    return "A"
  }else if(media < 9 && media >= 7.5){
    return "B"
  }else if (media < 7.5 && media >= 6){
    return "C"
  } else {
    return "D"
  }
}