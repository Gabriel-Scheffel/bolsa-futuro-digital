function chamada(alunos) {
    // Coloca em ordem alfabética
    alunos.sort()

    for(let i in alunos) {
        // Posição = índice + 1
        let pos = Number(i) + 1
        // Exibe os alunos em ordem alfabética
        console.log(`${pos}º aluno: ${alunos[i]}`)
    }
}

function adicionar(alunos, novos) {
    // Faz um loop na lista de novos alunos
    for(let i in novos) {
        // Adiciona os novos a turma
        alunos.push(novos[i])
    }
    return alunos
}

// Cria a turma com 5 alunos
let turma = ['Gabriel', 'Ana', 'Pedro', 'Bia', 'Carlos']

// Chama a função que faz a chamada
chamada(turma)

console.log('===================')

// Cria uma lista com novos alunos
let novos = ['Carol', 'Julia', 'Rafael']

// Chama a função que adiciona os novos alunos na turma
turma = adicionar(turma, novos)

// Faz a chamada novamente
chamada(turma)
