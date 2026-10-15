
// Objeto JavaScript (o que você já conhece)
let usuario = {
  nome: 'Ana',
  idade: 20,
  ativo: true
}

// O mesmo dado em JSON (é uma string!)
let useuarioJson = {
    "nome":"Ana",
    "idade":20,
    "ativo":true
}

// JSON é sempre texto —
// chaves e strings usam aspas duplas.

// =====================================

let user = {
  "nome": "Lucas",          // string
  "idade": 21,              // number
  "aprovado": true,         // boolean
  "nota": null,             // null
  "cursos": [               // array
    "HTML",
    "CSS",
    "JavaScript"
  ],
  "endereco": {            // object
    "cidade": "Porto Alegre",
    "uf": "RS"
  }
}

// =====================================

// JSON inválido
let user1 = {
  nome: 'Ana',        // chave sem aspas duplas
  "cidade": 'SP',     // aspas simples na string
  "ativo": undefined, // undefined não existe
  "cursos": [],       // vírgula sobrando aqui
}

// JSON válido
let user2 = {
  "nome": "Ana",
  "cidade": "SP",
  "ativo": true,
  "cursos": []
}

// =====================================

let produto = {
  nome: 'Teclado',
  preco: 350,
  emEstoque: true
}

// Objeto → String JSON
let texto = JSON.stringify(produto)

// String JSON → Objeto
let obj = JSON.parse(texto)

// =====================================

// Analogia: delivery de comida
// "Vou te entregar em 30 min" → pending
// Pedido chegou ✓             → fulfilled
// Pedido cancelado ✗          → rejected

// fetch() retorna uma Promise:
let promessa = fetch('https://viacep.com.br/ws/01001000/json')

console.log(promessa)
// Promise { <pending> }
// (o resultado ainda não chegou!)

// Para usar o resultado, precisamos
// de .then() ou async/await.

// =====================================

function esperar(segundos) {
  return new Promise(function(resolve, reject) {

    if (segundos < 0) {
      reject('Número de segundos inválido')
      return
    }

    setTimeout(function() {
      resolve('Pronto! Esperei ' + segundos + 's')
    }, segundos * 1000)

  })
}

esperar(2)  // retorna uma Promise

// =====================================

esperar(2)
  .then(function(mensagem) {
    console.log(mensagem) // 'Pronto! Esperei 2s'
    return 'próximo passo'
  })
  .then(function(valor) {
    console.log(valor)    // 'próximo passo'
  })
  .catch(function(erro) {
    console.log('Deu erro:', erro)
  })

// fetch com then/catch:
fetch('https://viacep.com.br/ws/01001000/json')
  .then(function(res)   { return res.json() })
  .then(function(dados) { console.log(dados.logradouro) })
  .catch(function(erro)  { console.log('Erro:', erro) })

// =====================================

Promise.all()
/*
Espera todas as Promises
terminarem. Retorna um array
com todos os resultados.

Se qualquer uma falhar,
o .all() falha também.
*/
let p1 = fetch('/api/usuario')
let p2 = fetch('/api/pedidos')

Promise.all([p1, p2])
  .then(function(resultados) {
    // resultados[0] → usuário
    // resultados[1] → pedidos
  })
  .catch(function(erro) {
    console.log(erro)
  })

// =====================================

Promise.race()
/*
Retorna o resultado da
primeira Promise que
terminar (sucesso ou erro).

Útil para criar timeout:
*/
function timeout(ms) {
  return new Promise(function(_, reject) {
    setTimeout(function() {
      reject('tempo esgotado')
    }, ms)
  })
}

Promise.race([
  fetch('/api/dados'),
  timeout(5000)
])
  .then(function(res) { /* ... */ })
  .catch(function(e) { console.log(e) })

// =====================================

// Com .then() — encadeamento
fetch('/api/usuario')
  .then(function(res)   { return res.json() })
  .then(function(dados) { console.log(dados.nome) })
  .catch(function(erro)  { console.log(erro) })

// Com async/await — mais legível!
async function buscarUsuario() {
  let res   = await fetch('/api/usuario')
  let dados = await res.json()
  console.log(dados.nome)
}

buscarUsuario()
// Mesmo resultado — código mais claro!

// =====================================

// await fora de async — SyntaxError!
let res = await fetch('/api')

// Correto: dentro de função async
async function buscar() {
  let res = await fetch('/api')  // ✓
  return res.json()
}

// Resultado de função async é Promise:
let resultado = buscar()
console.log(resultado)  // Promise { <pending> }

// Para obter o valor, use await:
async function principal() {
  let dados = await buscar()
  console.log(dados)
}

// =====================================


async function buscarEndereco(cep) {
  try {

    // 1. Faz a requisição para a API
    let resposta = await fetch('https://viacep.com.br/ws/' + cep + '/json')

    // 2. Verifica se o servidor retornou OK (status 200–299)
    if (!resposta.ok) {
      throw new Error('CEP não encontrado. Status: ' + resposta.status)
    }

    // 3. Converte a resposta de JSON string para objeto JavaScript
    let dados = await resposta.json()

    // 4. Usa os dados
    console.log(dados.logradouro + ', ' + dados.localidade + ' – ' + dados.uf)

  } catch (erro) {
    // Captura qualquer falha: sem internet, CEP inválido, servidor fora do ar...
    console.log('Erro ao buscar CEP:', erro.message)
  }
}

buscarEndereco('01310100')
// Avenida Paulista, São Paulo – SP