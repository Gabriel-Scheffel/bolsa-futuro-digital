
let frutas = ['maçã', 'banana', 'laranja']

// Exibindo o primeiro elemento
console.log(frutas[0])

// Exibindo todos os elementos do array
console.log(`Na posição 0 temos o elemento ${frutas[0]}`)
console.log(`Na posição 1 temos o elemento ${frutas[1]}`)
console.log(`Na posição 2 temos o elemento ${frutas[2]}`)

// Usando for para percorrer o array
for( let i=0; i < frutas.length; i++) {
    console.log(`Na posição ${i} temos o elemento ${frutas[i]}`)
}

// Usando for...in para percorrer o array
for(let i in frutas) {
    console.log(`Na posição ${i} temos o elemento ${frutas[i]}`)
}


