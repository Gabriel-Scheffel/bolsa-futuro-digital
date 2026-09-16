// Cria a turma com 5 alunos
let turma = ['Gabriel', 'Ana', 'Pedro', 'Bia', 'Carlos']

// Coloca em ordem alfabética
turma.sort()

for(let i in turma) {
    // Posição = índice + 1
    let pos = Number(i) + 1
    // Exibe os alunos em ordem alfabética
    console.log(`${pos}º aluno: ${turma[i]}`)
}

console.log('===================')

// Adiciona novos alunos na turma
turma.push('Carol')
turma.push('Julia')
turma.push('Rafael')

// Coloca em ordem alfabética
turma.sort()

for(let i in turma) {
    // Posição = índice + 1
    let pos = Number(i) + 1
    // Exibe os alunos em ordem alfabética
    console.log(`${pos}º aluno: ${turma[i]}`)
}

