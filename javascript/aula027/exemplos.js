// ==============================

// Valores falsy no JavaScript:
// false, 0, '', null, undefined, NaN

// Valores truthy: tudo o mais!
// true, 1, 'texto', [], {}, ...

// || retorna o primeiro valor TRUTHY:
console.log(false || 'Visitante')   // 'Visitante'
console.log('Ana'  || 'Visitante')   // 'Ana'

// && retorna o primeiro valor FALSY
// (ou o último valor, se todos forem truthy):
console.log(false && 'clicado')     // false
console.log(true  && 'clicado')     // 'clicado'

// ==============================

// Retorna o PRIMEIRO valor truthy
// ou o último, se todos forem falsy

let a1 = 0   || 'zero'   // 'zero'
let b1 = ''  || 'vazio'  // 'vazio'
let c1 = null|| 'nulo'   // 'nulo'
let d1 = 'Ana'|| 'João'   // 'Ana'

// Sem short circuit (com if/else):
let nome1 = ''
let exibir1
if (nome) {
  exibir = nome
} else {
  exibir = 'Visitante'
}

// Com || (muito mais curto!):
let exibir2 = nome || 'Visitante'
// 'Visitante'

// ==============================

// Uso prático: valor padrão

let usuarioo = {
  nome:  'Ana',
  idade: null
}

// exibe o valor ou um padrão:
let nome  = usuario.nome  || 'Anônimo'
let idade = usuario.idade || 'Não informada'

console.log(nome)   // 'Ana'
console.log(idade)  // 'Não informada'

// Exercício:
// Dado o objeto abaixo, exiba o apelido
// do usuário ou 'Sem apelido' usando ||
let user = { nome: 'João', apelido: '' }

let apelido = user.apelido || 'Sem apelido'
console.log(apelido)  // 'Sem apelido'

// ==============================

// Retorna o PRIMEIRO valor falsy
// ou o último, se todos forem truthy

let a2 = false && 'texto'   // false
let b2 = 0     && 'texto'   // 0
let c2 = true  && 'texto'   // 'texto'
let d2 = true  && 42       // 42
let e2 = true  && true     // true

// Sem short circuit:
let logado = true
if (logado) {
  console.log('Bem-vindo!')
}

// Com &&:
logado && console.log('Bem-vindo!')
// 'Bem-vindo!'

// ==============================

// Uso prático: ação condicional

let admin = true
let div = document.getElementById('painel')

// Mostra painel só se for admin:
admin && (div.style.display = 'block')

// Combinando && e ||:
let logadoo = false

let status2 = (logado && 'Online') || 'Offline'
console.log(status)  // 'Offline'

logado = true
status = (logado && 'Online') || 'Offline'
console.log(status)  // 'Online'

// Padrão muito usado para
// textos e badges condicionais!

// ==============================

// Problema com || e o número 0:
let pontos3 = 0
let exibir3 = pontos || 'Sem pontos'
console.log(exibir)
// 'Sem pontos' ← errado! pontos = 0

// 0 é falsy → || ativa o lado direito
// mas 0 é um valor VÁLIDO aqui!

// O mesmo com string vazia:
let descricao3 = ''
let texto3 = descricao || 'Sem descrição'
console.log(texto)
// 'Sem descrição' ← '' pode ser intencional!

// ==============================

// ?? só ativa se for null ou undefined
// Ignora 0, '', false, NaN

let pontos = 0
let exibirr = pontos ?? 'Sem pontos'
console.log(exibir)  // 0 ✓ correto!

let descricao = ''
let texto = descricao ?? 'Sem descrição'
console.log(texto)   // '' ✓ correto!

// ?? ativa só com null/undefined:
let a = null      ?? 'padrão'  // 'padrão'
let b = undefined ?? 'padrão'  // 'padrão'
let c = 0         ?? 'padrão'  // 0
let d = ''        ?? 'padrão'  // ''
let e = false     ?? 'padrão'  // false

// ==============================

// Exibir mensagem de boas-vindas:
let usuario = { nome: 'Ana', admin: true }

let saudacao = 'Olá, ' + (usuario.nome || 'Visitante')
console.log(saudacao)  // 'Olá, Ana'

let badge = usuario.admin && '[ADMIN]'
console.log(badge)     // '[ADMIN]'

// Placar de jogo (0 é válido → use ??):
let placar = 0
let exibir = placar ?? 'Partida não iniciada'
console.log(exibir)    // 0

// Status de conexão:
let loogado = false
let status = (logado && 'Online') || 'Offline'
console.log(status)   // 'Offline'


// ==============================

// Sintaxe:
let novoArray1 = array.map(function(item) {
  return /* novo valor */
})

// Exemplo simples:
let numeross = [1, 2, 3, 4]

let dobrados = numeros.map(function(n) {
  return n * 2
})

console.log(numeros)   // [1, 2, 3, 4]  ← original intacto!
console.log(dobrados)  // [2, 4, 6, 8]  ← novo array

// map() SEMPRE retorna um array
// com o MESMO número de itens.

// ==============================

// Transformar números:
let precos = [100, 200, 350, 80]

let comDesconto = precos.map(function(p) {
  return p * 0.9   // 10% de desconto
})

console.log(comDesconto)
// [90, 180, 315, 72]

// Transformar strings:
let nomes = ['ana', 'joão', 'maria']

let maiusculos = nomes.map(function(nome) {
  return nome.toUpperCase()
})

console.log(maiusculos)
// ['ANA', 'JOÃO', 'MARIA']

// ==============================

// Transformar objetos:
let produtos2 = [
  { nome: 'Teclado', preco: 250 },
  { nome: 'Mouse',   preco: 120 },
  { nome: 'Monitor', preco: 1200 },
]

let etiquetas2 = produtos.map(function(p) {
  return {
    nome: p.nome,
    preco: p.preco,
    etiqueta: 'R$ ' + p.preco
  }
})

console.log(etiquetas[0])
// { nome: 'Teclado', preco: 250, etiqueta: 'R$ 250' }

// Exercício:
// Dado o array de precos acima,
// gere um novo array onde cada preço
// tem 10% de desconto.

// ==============================

// Sintaxe:
let novoArray = array.filter(function(item) {
  return /* true = manter, false = descartar */
})

// Exemplo simples:
let nnumeros = [1, 2, 3, 4, 5, 6]

let pares = numeros.filter(function(n) {
  return n % 2 === 0
})

console.log(numeros)  // [1, 2, 3, 4, 5, 6]  ← intacto!
console.log(pares)    // [2, 4, 6]

// filter() pode retornar um array menor
// (ao contrário de map(), que mantém
// o mesmo número de itens).

// ==============================

// Filtrar objetos por propriedade:
let produtos = [
  { nome: 'Teclado', emEstoque: true  },
  { nome: 'Mouse',   emEstoque: false },
  { nome: 'Monitor', emEstoque: true  },
  { nome: 'Headset', emEstoque: false },
]

let disponiveis = produtos.filter(function(p) {
  return p.emEstoque
})

console.log(disponiveis.length)  // 2
console.log(disponiveis[0].nome)  // 'Teclado'

// Exercício:
// Filtre apenas os produtos
// que estão em estoque.

// ==============================

// Composição: filter() + map()
// Primeiro filtra, depois transforma!

let produtos = [
  { nome: 'Teclado', preco: 250, emEstoque: true  },
  { nome: 'Mouse',   preco: 120, emEstoque: false },
  { nome: 'Monitor', preco: 1200, emEstoque: true  },
]

// Passo 1: filter — só em estoque
let disponiveis = produtos.filter(function(p) {
  return p.emEstoque
})

// Passo 2: map — adicionar etiqueta
let etiquetas = disponiveis.map(function(p) {
  return p.nome + ': R$ ' + p.preco
})

console.log(etiquetas)
// ['Teclado: R$ 250', 'Monitor: R$ 1200']

// ==============================

// Ordenação PADRÃO: alfabética (strings)

let frutas = ['manga', 'abacaxi', 'banana']
frutas.sort()
console.log(frutas)
// ['abacaxi', 'banana', 'manga'] ✓

// ⚠️ Armadilha com números!

let numeros = [10, 2, 50, 8, 100]
numeros.sort()
console.log(numeros)
// [10, 100, 2, 50, 8] ✗ errado!

// JavaScript converte para string:
// '10', '100', '2', '50', '8'
// e ordena letra por letra: '1' < '2' < '5'

// ⚠️ sort() MODIFICA o array original!
// (ao contrário de map e filter)

// ==============================

// Solução: função de comparação
// Se retorna < 0: a vem antes de b
// Se retorna > 0: b vem antes de a
// Se retorna 0: mesma posição

let numeros = [10, 2, 50, 8, 100]

// Crescente (a - b):
numeros.sort(function(a, b) {
  return a - b
})
console.log(numeros)  // [2, 8, 10, 50, 100] ✓

// Decrescente (b - a):
numeros.sort(function(a, b) {
  return b - a
})
console.log(numeros)  // [100, 50, 10, 8, 2] ✓


// ==============================

// Ordenar objetos por propriedade:
let alunos = [
  { nome: 'Ana',   nota: 8.5 },
  { nome: 'João',  nota: 6.0 },
  { nome: 'Maria', nota: 9.2 },
  { nome: 'Pedro', nota: 7.8 },
]

// Copiar antes de ordenar (boa prática):
let copia = []
for (let i in alunos) {
  copia.push(alunos[i])
}

// Ordenar do maior para o menor (b - a):
copia.sort(function(a, b) {
  return b.nota - a.nota
})

console.log(copia[0].nome)  // 'Maria' (9.2)
console.log(copia[1].nome)  // 'Ana'   (8.5)
console.log(copia[2].nome)  // 'Pedro' (7.8)
console.log(copia[3].nome)  // 'João'  (6.0)

// alunos original não foi modificado ✓

// ==============================

// Fluxo do script.js:

// 1. DADOS: array de produtos
let produtos = [ ... ]

// 2. filter() — apenas em estoque
resultado = resultado.filter(function(p) {
  return p.emEstoque
})

// 3. sort() — por preço (copia antes!)
copia.sort(function(a, b) {
  return a.preco - b.preco
})

// 4. map() — adiciona etiqueta formatada
let formatados = resultado.map(function(p) {
  return { ...p, etiqueta: 'R$ ' + p.preco }
})

// 5. for...in — renderiza os cards
// 6. || e && — exibe o status do produto

// ==============================
