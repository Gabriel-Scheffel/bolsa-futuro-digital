let perfil = {
    nome: 'Gabriel',
    email: 'gabriel@email.com',
    cidade: 'Viamão'
}

let {nome, email, cidade} = perfil

console.log(nome) // email, cidade

let copia = {...perfil}
copia.ativo = true

console.log(perfil)
console.log(copia)

