let produtos = [
  { nome: 'Notebook', preco: 3500, estoque: 0  },
  { nome: 'Headset',  preco: 180,  estoque: 5  },
  { nome: 'Webcam',   preco: 290,  estoque: 0  },
  { nome: 'Teclado',  preco: 250,  estoque: 12 },
  { nome: 'Monitor',  preco: 1200, estoque: 3  },
]

let disponiveis = produtos.filter(function(p) {
  return p.estoque > 0
})

let baratos = disponiveis.filter(function(p) {
  return p.preco < 300
})

console.log(disponiveis.length)  // 3
console.log(baratos.length)      // 2
