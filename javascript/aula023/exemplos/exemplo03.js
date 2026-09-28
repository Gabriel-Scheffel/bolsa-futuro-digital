let user = {
    nome: 'Gabriel',
    idade: 25,

    saudacao: function() {
        console.log(`Olá, me chamo ${this.nome}!`)
    }
}

user.saudacao()

let {nome, idade, estado = 'Não informado'} = user

console.log(`Olá, me chamo ${nome} e tenho ${idade} anos.`)

console.log(`O usuário ${nome} mora no estado: ${estado}`)
