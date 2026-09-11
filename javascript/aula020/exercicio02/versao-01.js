// Cria um aray com as notas
let notas = [8.7, 5.0, 6.5, 8.0, 6.0]

// Cria a soma das notas
let soma = 0

// Faz um loop pelas notas
for(let i in notas) {
    // Adiciona as notas na soma
    soma += notas[i]
}

// média = soma das notas / nº de notas
let media = soma / notas.length

// Exibe a média final
console.log(`Nota final = ${media}`)
console.log('======================')

if (media >= 6) {
    // Se a média é maior que 6
    console.log('Parabéns você foi aprovado!')
} else {
    // Se a média é menor que 6
    console.log('Infelizmente você foi reprovado.')
}
