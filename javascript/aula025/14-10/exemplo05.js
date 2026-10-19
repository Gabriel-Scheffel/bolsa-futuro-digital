function esperar(segundos) {
    return new Promise(function(resolve, reject){

        if (segundos < 0) {
            reject('Número de segundos inválido')
            return
        }

        setTimeout(function() {
            resolve('Pronto! Esperei ' + segundos + 's')
        }, segundos * 1000)

    })
}

esperar(2)
    .then(function(mensagem) {
        console.log(mensagem) 
        return 'próximo passo'
    })
    .then(function(valor) {
        console.log(valor)
    })
    .catch(function(erro) {
        console.log('Erro:', erro)
    })


