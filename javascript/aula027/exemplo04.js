const numeros = [1, 2, 3, 4, 5]

function aoQuadrado(num) {
    return num**2
}

function aoCubo(num) {
    return num**3
}

const resultado = numeros.map(aoQuadrado)
const novoResultado = numeros.map(aoCubo)

console.log(numeros)
console.log(resultado)
console.log(novoResultado)
