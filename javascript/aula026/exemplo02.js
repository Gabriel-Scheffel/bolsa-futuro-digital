
function gastarPontos( total ) {

    let pontos = total

    console.log(`Total: ${pontos}`)

    // Retorna um objeto com dois itens
    return {
        
        // 1º item: função que gasta pontos
        gastar: function(n) {
            pontos-=n
            console.log(`Novo total: ${pontos}`)
        },

        // 2º item: função que ganha ponto
        ganhar: function(n) {
            pontos+=n
            console.log(`Novo total: ${pontos}`)
        }
    }

} 

const mudarPontos = gastarPontos(5)

console.log(mudarPontos)

mudarPontos.gastar(2)
