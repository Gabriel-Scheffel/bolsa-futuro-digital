
let nomes = ['Gabriel', 'Ana', 'Carlos']

// coloca em ordem alfabética
nomes.sort()
console.log(nomes)
// ['Ana', 'Carlos', 'Gabriel']

let numeros = [2, 5, 1, 9, 8]

// coloca em ordem crescente
numeros.sort()
console.log(numeros)
// [1, 2, 5, 8, 9]

// Podemos ordenar arrays com valores mistos
let misto = [25, true, 'Gabriel', 1, false, 'Ana']

// ordena em: Number -> String -> Boolean 
misto.sort()

console.log(misto)
// [1, 25, 'Ana', 'Gabriel', false, true]

