function media() {
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    let n3 = Number(document.getElementById('n3').value)
    let n4 = Number(document.getElementById('n4').value)
    let n5 = Number(document.getElementById('n5').value)
    
    let notas = [n1, n2, n3, n4, n5]
    
    for (let i in notas) {
        if (isNaN(notas[i])) {
            alert(`Nota da prova ${i+1} inválida!`)
            return
        }
    }
    
    let soma = 0
    for (let i in notas) {
        soma += notas[i]
    }
    
    let media = soma / 5
    media = media.toFixed(2)
    let resultado = document.getElementById('resultado')
    
    if (media > 6) {
        resultado.innerHTML = `Média: ${media} - APROVADO!`
    } else {
        resultado.innerHTML = `Média: ${media} - REPROVADO!`
    }
}