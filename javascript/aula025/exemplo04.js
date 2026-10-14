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