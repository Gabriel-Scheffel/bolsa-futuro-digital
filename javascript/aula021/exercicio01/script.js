let turma = []

function adicionar() {
    let aluno = document.getElementById('nome').value
    
    if (aluno === '') return
    
    turma.push(aluno)
    
    document.getElementById('alunos').innerHTML = turma.join(', ')
    document.getElementById('nome').value = ''
}

function chamada() {
    turma.sort()
    let select = document.getElementById('chamada')
    select.innerHTML = ''
    
    for (let i = 0; i < turma.length; i++) {
        let option = document.createElement('option')
        option.text = (i + 1) + 'º - ' + turma[i]
        select.appendChild(option)
    }
}