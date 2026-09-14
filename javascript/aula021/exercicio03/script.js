function maior() {
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    let resultado = document.getElementById('resultado')
    
    // Validação: confira se são números
    if (isNaN(n1) || isNaN(n2) || n1 === '' || n2 === '') {
        resultado.innerHTML = 'Digite números válidos!'
        return
    }
    
    // Converte para número
    n1 = Number(n1)
    n2 = Number(n2)
    
    // Compara
    if (n1 > n2) {
        resultado.innerHTML = n1 + ' é maior que ' + n2
    } else if (n1 < n2) {
        resultado.innerHTML = n2 + ' é maior que ' + n1
    } else {
        resultado.innerHTML = 'Os valores são iguais!'
    }
}