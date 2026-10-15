const cepInput = document.getElementById('cep')
const buscarBtn = document.getElementById('buscar')

const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const p3 = document.getElementById('p3')
const p4 = document.getElementById('p4')
const p5 = document.getElementById('p5')

async function buscarEndereco() {
    try {
        let cep = cepInput.value
        // 1. Faz a requisição para a API
        let resposta = await fetch('https://viacep.com.br/ws/' + cep + '/json')

        // 2. Verifica se o servidor retornou OK (status 200-299)
        if (!resposta.ok) {
            throw new Error('CEP não encontrado. Status: ' + resposta.status)
        }

        // 3. Converte a resposta de JSON string para objeto JavaScript
        let dados = await resposta.json()
        
        // 4. Atualiza o conteúdo dos parágrafos com os dados do endereço
        p1.textContent = 'CEP: ' + dados.cep
        p2.textContent = 'Logradouro: ' + dados.logradouro
        p3.textContent = 'Bairro: ' + dados.bairro
        p4.textContent = 'Cidade: ' + dados.localidade
        p5.textContent = 'Estado: ' + dados.uf

    } catch (erro) {
        // Captura qualquer falha: sem internet, CEP inválido, servidor fora do ar...
        console.log('Erro ao buscar CEP: ', erro.message)
    }
}

buscarBtn.addEventListener('click', buscarEndereco)
