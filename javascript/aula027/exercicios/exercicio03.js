let produtos = [
  { nome: 'Teclado', preco: 250  },
  { nome: 'Mouse',   preco: 120  },
  { nome: 'Monitor', preco: 1200 },
]

let comEtiquetas = produtos.map(function(p) {
  return { nome: p.nome, preco: p.preco, etiqueta: 'R$ ' + p.preco }
})

console.log(produtos[0])      // { nome: 'Teclado', preco: 250 }
console.log(comEtiquetas[0])  // { nome: 'Teclado', preco: 250, etiqueta: 'R$ 250' }
