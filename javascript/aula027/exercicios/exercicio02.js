let produtos = [
  { nome: 'Camiseta', preco: 80  },
  { nome: 'Calça',    preco: 150 },
  { nome: 'Tênis',    preco: 220 },
]

produtos.forEach(function(produto) {
  produto.preco = produto.preco * 0.8
})

produtos.forEach(function(produto) {
  console.log(produto.nome + ': R$ ' + produto.preco)
})

// "Camiseta: R$ 64"
// "Calça: R$ 120"
// "Tênis: R$ 176"
