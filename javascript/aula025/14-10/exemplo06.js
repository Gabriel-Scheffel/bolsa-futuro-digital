fetch('https://viacep.com.br/ws/90050003/json')
    .then(function(res) { return res.json() })
    .then(function(dados) { console.log(dados) })
    .catch(function(erro) { console.log('Erro:', erro) })

    // dados exibe todo o objeto
    