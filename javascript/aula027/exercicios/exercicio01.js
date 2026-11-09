let usuario = { nome: 'Carlos', idade: 0, premium: true, bio: undefined }

let nomeExibir  = usuario.nome    || 'Anônimo'
let idadeExibir = usuario.idade   ?? 'Não informada'
let badge       = usuario.premium && '[PREMIUM]'
let bioExibir   = usuario.bio     ?? 'Sem bio'

console.log(nomeExibir)   // 'Carlos'
console.log(idadeExibir)  // 0
console.log(badge)        // '[PREMIUM]'
console.log(bioExibir)    // 'Sem bio'
