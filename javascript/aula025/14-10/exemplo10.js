async function buscarEndereco(cep) {
    try {

        // 1. Faz a requisição para a API
        let resposta = await fetch('https://viacep.com.br/ws/' + cep + '/json')

        // 2. Verifica se o servidor retornou OK (status 200-299)
        if (!resposta.ok) {
            throw new Error('CEP não encontrado. Status: ' + resposta.status)
        }

        // 3. Converte a resposta de JSON string para objeto JavaScript
        let dados = await resposta.json()

        //4. Usa os dados
        console.log(dados.logradouro + ', ' + dados.localidade + ' - ' + dados.uf)

    } catch (erro) {
        // Captura qualquer falha: sem internet, CEP inválido, servidor fora do ar...
        consolose.log('Erro ao buscar CEP: ', erro.message)
    }
}

buscarEndereco('94500330')
