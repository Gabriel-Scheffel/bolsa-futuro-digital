fetch('https://viacep.com.br/ws/90050003/json')
    // Quando terminar converte a resposta p/ JSON
    .then(function(resposta) { return resposta.json()})
    // Quando converter exibe os dados
    .then(function(dados) { console.log(dados) })

    