// Slide 1

// Sem objeto: variáveis soltas
let nome = 'Ana'
let idade = 20
let curso = 'Frontend'

// Com objeto: tudo junto e organizado!
let aluna = {
  nome: 'Ana',
  idade: 20,
  curso: 'Frontend'
}

console.log(aluna)
// { nome: 'Ana', idade: 20, curso: 'Frontend' }

// ============================================

// Slide 2

let produto = {
  nome: 'Teclado Mecânico',
  preco: 350.00,
  emEstoque: true,
  categorias: ['pc', 'gamer'],
  dimensoes: {
    largura: 44,
    altura: 14
  }
}

// Objeto vazio — também é válido!
let vazio = { }

// ============================================

// Slide 3

let carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2022
}

// Notação de ponto
console.log(carro.marca) // 'Toyota'
console.log(carro.ano) // 2022

// Notação de colchetes
console.log(carro['modelo']) // 'Corolla'

// Com variável dinâmica no colchete
let campo = 'marca'
console.log(carro[campo]) // 'Toyota'

// ============================================

// Slide 4

let usuario = {
  nome: 'Carlos',
  idade: 22
}

// Adicionando uma nova propriedade
usuario.email = 'carlos@email.com'

// Alterando um valor existente
usuario.idade = 23

// Removendo uma propriedade
delete usuario.email

console.log(usuario)
// { nome: 'Carlos', idade: 23 }

// ============================================

// Slide 5

let user = {
  nome: 'Bia'
  // sem propriedade 'endereco'
}

// Sem proteção — ERRO!
console.log(user.endereco.cidade)
// TypeError: Cannot read properties of undefined

// Com ?. — sem erro!
console.log(user.endereco?.cidade)
// undefined

// Encadeando vários níveis
console.log(user.endereco?.bairro?.nome)
// undefined (código seguro!)

// ============================================

// Slide 6

let pessoa = {
  nome: 'Lucas',
  idade: 19,

  saudacao: function() {
    return 'Olá, eu sou ' + this.nome
  },

  maiorIdade: function() {
    return this.idade >= 18
  }
}

console.log(pessoa.saudacao())
// 'Olá, eu sou Lucas'

console.log(pessoa.maiorIdade()) // true

// ============================================

// Slide 7

let livro = {
  titulo: 'Clean Code',
  autor: 'Robert Martin',
  ano: 2008
}

// Sem desestruturação
let titulo = livro.titulo
let autor = livro.autor

// Com desestruturação
let { titulo, autor, ano } = livro

console.log(titulo) // 'Clean Code'
console.log(autor) // 'Robert Martin'
console.log(ano) // 2008

// ============================================

// Slide 8

let config = {
  tema: 'escuro',
  idioma: 'pt-br'
  // 'tamanhoFonte' não existe!
}

let {
  tema,
  idioma,
  tamanhoFonte = 16, // padrão!
  animacoes = true // padrão!
} = config

console.log(tema) // 'escuro'
console.log(tamanhoFonte) // 16
console.log(animacoes) // true

// ============================================

// Slide 9

let base = { nome: 'Maria', idade: 21 }

// Copiando sem alterar o original
let copia = { ...base }
copia.nome = 'Maria Silva'

console.log(base.nome) // 'Maria' (original intacto!)
console.log(copia.nome) // 'Maria Silva'

// Combinando dois objetos em um
let extra = { curso: 'Frontend', turno: 'manhã' }
let aluna = { ...base, ...extra }

console.log(aluna)
// { nome: 'Maria', idade: 21,
// curso: 'Frontend', turno: 'manhã' }

// ============================================

// Slide 10

let obj = { a: 1, b: 2, c: 3 }

// Lista as chaves do objeto
Object.keys(obj)
// ['a', 'b', 'c']

// Lista os valores
Object.values(obj)
// [1, 2, 3]

// Lista pares [chave, valor]
Object.entries(obj)
// [['a',1], ['b',2], ['c',3]]

// ------

// Congela o objeto (impede mudanças)
Object.freeze(obj)
obj.a = 99 // ignorado!
console.log(obj.a) // ainda 1

// Iterando as chaves com for...in
let carro = { marca: 'Ford', ano: 2020 }

for (let chave in carro) {
  console.log(chave + ': ' + carro[chave])
}
// marca: Ford
// ano: 2020

// ============================================


