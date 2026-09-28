// Sem objeto: variáveis soltas
let nome = 'Ana'
let idade = 20
let curso = 'Frontend'

// Com array: sem chaves
let alunaAna = ['Ana', 20, 'Frontend']

// Com objeto: tudo junto e organizado!
let aluna = {
  nome: 'Ana',
  idade: 20,
  curso: 'Frontend',
  turno: ['tarde', 'noite'],
  notas: {
    HTML: 9.5,
    CSS: 9.0,
    JavaScript: 10
  }
}

console.log(aluna)
// { nome: 'Ana', idade: 20, curso: 'Frontend' }

console.log(aluna.nome)
// 'Ana'

console.log(aluna['turno'])
// [ 'tarde', 'noite' ]

aluna.email = 'ana@email.com'

aluna.idade = 21

delete aluna.notas.JavaScript

console.log(aluna)

