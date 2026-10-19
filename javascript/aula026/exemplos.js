// =============================

let nome = 'Ana'           // global

function saudacao() {
  let mensagem = 'Olá!'    // local
  console.log(nome)        // ✓ acessa global
  console.log(mensagem)    // ✓ acessa local
}

saudacao()

console.log(nome)           // ✓ 'Ana'
console.log(mensagem)       // ✗ ReferenceError!
                            // mensagem não existe aqui

// =============================

// var ignora blocos {}

if (true) {
  var cidade = 'Porto Alegre'
}
console.log(cidade)
// 'Porto Alegre' ← vazou!

for (var i = 0; i < 3; i++) {
  // ...
}
console.log(i)  // 3 ← ainda existe!

// Use var é imprevisível fora
// do escopo que você imaginou.

// =============================

// let e const respeitam blocos {}

if (true) {
  let cidade = 'Porto Alegre'
}
console.log(cidade)
// ✗ ReferenceError!

for (let j = 0; j < 3; j++) {
  // ...
}
console.log(j)  // ✗ ReferenceError!

// let e const se comportam
// como o esperado. Prefira-os!

// =============================

function calcular(a, b) {
  let resultado = a + b   // existe só aqui
  console.log(resultado)  // ✓ 15
}

calcular(10, 5)
console.log(resultado)    // ✗ ReferenceError!

// Cada chamada tem seu próprio escopo:
function cumprimentar(nome) {
  let msg = 'Olá, ' + nome + '!'
  console.log(msg)
}

cumprimentar('Ana')   // Olá, Ana!
cumprimentar('João')  // Olá, João!
// cada chamada tem seu próprio 'msg'

// =============================

function criarSaudacao(nome) {
  // 'nome' fica guardado na closure

  return function() {
    console.log('Olá, ' + nome + '!')
  }
}

let saudarAna  = criarSaudacao('Ana')
let saudarJoao = criarSaudacao('João')

saudarAna()   // Olá, Ana!
saudarJoao()  // Olá, João!

// criarSaudacao já terminou de executar,
// mas 'nome' ainda está acessível!
// Isso é uma closure.

// =============================

function criarContador() {
  let total = 0          // variável privada!

  return function() {
    total = total + 1
    return total
  }
}

let contar = criarContador()

console.log(contar())  // 1
console.log(contar())  // 2
console.log(contar())  // 3

// Contadores independentes:
let contarCliques = criarContador()
let contarErros   = criarContador()

contarCliques()  // 1
contarCliques()  // 2
contarErros()    // 1 ← independente!

// =============================

// Função guardada em variável
let somar = function(a, b) {
  return a + b
}

console.log(somar(3, 4))   // 7
console.log(typeof somar)   // 'function'

// Passando função como argumento
function executar(fn) {
  console.log('Executando...')
  fn()
}

function dizerOi() {
  console.log('Oi!')
}

executar(dizerOi)   // ✓ passa a função
// Executando...
// Oi!

executar(dizerOi()) // ✗ passa o resultado (undefined)

// =============================

// addEventListener já é um callback!
let btn = document.getElementById('btn')

btn.addEventListener('click', function() {
  console.log('Clicado!')  // ← callback
})

// Criando sua própria função com callback:
function processar(dados, callback) {
  console.log('Processando: ' + dados)
  callback(dados)
}

function exibir(valor) {
  console.log('Resultado: ' + valor)
}

processar('relatório', exibir)
// Processando: relatório
// Resultado: relatório

// =============================

function executarSe(condicao, callback) {
  if (condicao) {
    callback()
  }
}

executarSe(true, function() {
  console.log('Condição verdadeira!')
})
// Condição verdadeira!

executarSe(false, function() {
  console.log('Isso não roda')
})
// (nada é exibido)

// Validação com callback:
function validar(valor, aoValidar) {
  if (valor === '') {
    aoValidar(false, 'Campo obrigatório')
  } else {
    aoValidar(true, 'Válido!')
  }
}

// =============================

// Primitivos: cópia por VALOR
let a = 10
let b = a         // b recebe uma CÓPIA de a

b = 20

console.log(a)    // 10 ← não mudou!
console.log(b)    // 20

// O mesmo com strings:
let nome1 = 'Ana'
let nome2 = nome1   // cópia independente

nome2 = 'João'

console.log(nome1)  // 'Ana' ← intacto!
console.log(nome2)  // 'João'

// Comparação usa o VALOR:
let x = 5
let y = 5
console.log(x === y)  // true ← mesmos valores


// =============================

// Objetos: cópia por REFERÊNCIA
let usuario1 = { nome: 'Ana', idade: 20 }
let usuario2 = usuario1  // ← mesma referência!

usuario2.nome = 'João'

console.log(usuario1.nome)  // 'João' ← mudou!
console.log(usuario2.nome)  // 'João'

// O mesmo com arrays:
let notas1 = [7, 8, 9]
let notas2 = notas1  // ← mesma referência!

notas2.push(10)

console.log(notas1)  // [7, 8, 9, 10] ← mudou!
console.log(notas2)  // [7, 8, 9, 10]

// São o mesmo objeto na memória:
console.log(usuario1 === usuario2)  // true


// =============================

// Abordagem 1: JSON (visto na Aula 25)
// stringify → string
// parse     → objeto NOVO na memória

let original = { nome: 'Ana', nota: 9 }

let copia = JSON.parse(
  JSON.stringify(original)
)

copia.nome = 'João'

console.log(original.nome)  // 'Ana' ✓
console.log(copia.nome)     // 'João'

// Objetos separados:
console.log(original === copia)  // false ✓

// =============================

// Abordagem 2: copiar com for...in

let produto = { nome: 'Teclado', preco: 350 }
let novoProduto = {}

for (let chave in produto) {
  novoProduto[chave] = produto[chave]
}

novoProduto.preco = 400

console.log(produto.preco)      // 350 ✓
console.log(novoProduto.preco)   // 400

// Objetos separados:
console.log(produto === novoProduto)  // false ✓

// =============================

// Estrutura do projeto:

// 1. CLOSURE — gerador de IDs únicos
let gerarId = criarContador()
gerarId()  // 1
gerarId()  // 2
gerarId()  // 3

// 2. CALLBACK — processar um recado
processar(recado, function(r) {
  // faz algo com r...
})

// 3. REFERÊNCIA — remover sem mutar
let novosRecados = []
for (let i in recados) {
  if (recados[i].id !== id) {
    novosRecados.push(recados[i])
  }
}
recados = novosRecados  // substitui sem mutar

// =============================


// =============================


