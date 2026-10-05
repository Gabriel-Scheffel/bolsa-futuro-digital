let txt = document.getElementById('txt')
let lista = document.getElementById('lista')

function addTarefa() {
    // Ignora textos vazios ou só com espaços
    if (txt.value.trim() == '') {
        return
    }

    let item = document.createElement('li')

    let texto = document.createElement('span')
    texto.innerText = txt.value

    // Botão V: marca/desmarca a tarefa como concluída
    let btnV = document.createElement('button')
    btnV.innerText = '✔'
    btnV.classList.add('concluir')
    btnV.addEventListener('click', function() {
        item.classList.toggle('concluida')
    })

    // Botão X: remove a tarefa da lista
    let btnX = document.createElement('button')
    btnX.innerText = '✖'
    btnX.classList.add('excluir')
    btnX.addEventListener('click', function() {
        item.remove()
    })

    item.appendChild(texto)
    item.appendChild(btnV)
    item.appendChild(btnX)
    lista.appendChild(item)

    // Limpa a caixa de texto para a próxima atividade
    txt.value = ''
}

// Adiciona a tarefa quando o usuário aperta Enter na caixa de texto
txt.addEventListener('keydown', function(e) {
    if (e.key == 'Enter') {
        addTarefa()
    }
})
