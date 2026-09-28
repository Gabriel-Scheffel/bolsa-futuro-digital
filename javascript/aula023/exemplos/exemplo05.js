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
