let user = {
    nome: 'Gabriel',
    endereco: {
        estado: 'RS',
        cidade: 'Viamão'
    }
}

console.log(user.endereco.cidade)

console.log(user.endereco.bairro)

console.log(user.endereco.bairro?.rua?.ap)
