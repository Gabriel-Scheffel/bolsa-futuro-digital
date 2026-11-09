
// .filter cria um array novo 
//   filtrando os elementos

const idades = [16, 17, 18, 18, 19, 20, 60]

function maiorIdade (num) {
    // retorna true ou false
    return num >= 18
}

function menorIdade (num) {
    // retorna true ou false
    return num < 18
}

// Apenas idades maiores que 18
const adultos = idades.filter(maiorIdade)
// Apenas idades menores que 18
const jovens = idades.filter(menorIdade)

console.log(adultos)
console.log(jovens)


