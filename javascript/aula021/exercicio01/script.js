// Cria o array para armazenar os nomes
let turma = []

// Função que adiciona o nome no array e mostra na tela
function adicionar() {
    // Pega o valor dentro do elemento HTML com o nome
    let aluno = document.getElementById('nome').value
    
    // Se está vazio, sem nome, retorna a função
    if (aluno === '') return
    
    // Adiciona o aluno à turma
    turma.push(aluno)
    
    // Mostra o nome adicionado na tela, dentro do elemento HTML
    document.getElementById('alunos').innerHTML = turma.join(', ')
    // Apaga o nome já escrito do input
    document.getElementById('nome').value = ''
}

// Função que mostra todos os nomes em ordem alfabética
function chamada() {
    // Ordena os nomes
    turma.sort()

    // Pega o elemento HTML onde os nomes serão mostrados
    let select = document.getElementById('chamada')

    // Limpa o elemento
    select.innerHTML = ''
    
    // Loop pelo array
    for (let i = 0; i < turma.length; i++) {
        // Cria um item dentro do elemento HTML
        let option = document.createElement('option')

        // Exibe: nº - nome
        option.text = `${(i + 1)}º - ${turma[i]}`
        select.appendChild(option)
    }
}
