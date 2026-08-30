/*
// o usuário informa a idade 
// e se possui o ingresso
let idade = 16
let ingresso = false

// para entrar na festa ele deve ter
// mais de 18 anos e possuir um ingresso
let entrada = idade >= 18 && ingresso == true

// exibe na tela se a entrada é permitida
console.log(entrada)


// o usuário informa se possui 
// um ingresso ou convite
let ingresso = false
let convite = true

// para entrar na festa é necessário 
// ter um ingresso ou um convite
let entrada = ingresso == true || convite == true

// exibe na tela se a entrada é permitida
console.log(entrada)
*/

// pergunta se tem um ingresso
let ingresso = false

// se não tem ingresso, pode comprar
let comprar = !ingresso

// exibe se o usuário precisa de um ingresso
console.log('Precisa de ingresso:', comprar)
