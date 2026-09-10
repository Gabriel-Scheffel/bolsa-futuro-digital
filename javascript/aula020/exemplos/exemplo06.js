
let frutas = ['maçã', 'banana', 'laranja']

// Banana está no array e tem index [1]
console.log(frutas.indexOf('banana'))

// Uva não está no array, portanto seu index é [-1]
console.log(frutas.indexOf['uva'])


// Criamos um array
let num = [5, 8, 2, 9, 3]

// Escolhemos a posição de um elemento
let pos = num.indexOf(8)

// Verifica se o elemento está no array
if (pos == -1) {
    // Se a posição for -1 ele não está no array
    console.log('O valor não foi encontrado!')

} else {
    // Se não ele está na posição
    console.log(`O valor está na posição ${pos}`)
}
