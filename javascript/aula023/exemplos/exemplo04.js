let base = { nome: 'Maria', idade: 21 }

// Copiando sem alterar o original
let copia = { ...base }
copia.nome = 'Maria Silva'

console.log(base.nome) // 'Maria' (original intacto!)
console.log(copia.nome) // 'Maria Silva'

// Combinando dois objetos em um
let extra = { curso: 'Frontend', turno: 'manhã' }
let aluna = { ...base, ...extra }

console.log(aluna)
console.log(copia)
console.log(base)
// { nome: 'Maria', idade: 21,
// curso: 'Frontend', turno: 'manhã' }