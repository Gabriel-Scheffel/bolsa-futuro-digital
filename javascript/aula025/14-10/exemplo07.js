Promise.all()

let p1 = fetch('/api/usuario')
let p2 = fetch('/api/pedidos')

Promise.all([p1, p2])
    .then(function(resultados) {
        // resultados[0] -> usuário
        // resultados[1] -> pedidos
    })
    .catch(function(erro) {
        console.log(erro)
    })
    